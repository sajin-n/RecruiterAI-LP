"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

interface BounceCardsProps {
  className?: string;
  children: React.ReactNode[];
  containerWidth?: number;
  containerHeight?: number;
  animationDelay?: number;
  animationStagger?: number;
  easeType?: string;
  transformStyles?: string[];
  enableHover?: boolean;
}

export default function BounceCards({
  className = "",
  children = [],
  containerWidth = 500,
  containerHeight = 300,
  animationDelay = 0.3,
  animationStagger = 0.08,
  easeType = "elastic.out(1.2, 0.6)",
  transformStyles = [],
  enableHover = true,
}: BounceCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Mobile stack state
  const [cardOrder, setCardOrder] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const draggablesRef = useRef<Draggable[]>([]);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Initialize card order
  useEffect(() => {
    setCardOrder(children.map((_, i) => i));
  }, [children]);

  // Desktop animation
  useEffect(() => {
    if (isMobile) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".bounce-card",
        { 
          scale: 0, 
          opacity: 0,
          y: 30,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          stagger: animationStagger,
          ease: easeType,
          delay: animationDelay,
          duration: 0.8,
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [animationStagger, easeType, animationDelay, isMobile]);

  // Mobile stack animation with dragging
  useEffect(() => {
    if (!isMobile || !containerRef.current) return;

    gsap.registerPlugin(Draggable);

    const ctx = gsap.context(() => {
      // Initial stacked animation
      gsap.fromTo(
        ".mobile-stack-card",
        { 
          scale: 0.8, 
          opacity: 0,
          y: 50,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          stagger: 0.1,
          ease: "back.out(1.7)",
          delay: animationDelay,
          duration: 0.6,
          onComplete: () => {
            // Position cards in stack after animation
            cardOrder.forEach((cardIdx, stackPos) => {
              const card = containerRef.current?.querySelector(
                `.mobile-stack-card-${cardIdx}`
              );
              if (card) {
                const offset = (cardOrder.length - 1 - stackPos) * 8;
                const scale = 1 - (cardOrder.length - 1 - stackPos) * 0.05;
                
                gsap.set(card, {
                  y: -offset,
                  scale: scale,
                  zIndex: stackPos,
                  opacity: stackPos >= cardOrder.length - 3 ? 1 : 0.5,
                  force3D: true, // Force GPU acceleration
                });
              }
            });

            // Setup draggable for top card only after positioning
            setTimeout(() => {
              const topCardIdx = cardOrder[cardOrder.length - 1];
              const topCard = containerRef.current?.querySelector(
                `.mobile-stack-card-${topCardIdx}`
              );

              if (topCard) {
                const draggable = Draggable.create(topCard, {
                  type: "x,y",
                  bounds: { minX: -200, maxX: 200, minY: -200, maxY: 200 },
                  inertia: true,
                  onDrag: function() {
                    const distance = Math.abs(this.x) + Math.abs(this.y);
                    const rotation = (this.x / 200) * 15;
                    const opacity = Math.max(0.3, 1 - distance / 300);
                    
                    gsap.set(this.target, {
                      rotation: rotation,
                      opacity: opacity,
                    });
                  },
                  onDragEnd: function() {
                    const distance = Math.abs(this.x) + Math.abs(this.y);
                    
                    if (distance > 120) {
                      // Card swiped away - animate off screen
                      const angle = Math.atan2(this.y, this.x);
                      const exitX = Math.cos(angle) * 600;
                      const exitY = Math.sin(angle) * 600;
                      
                      gsap.to(this.target, {
                        x: exitX,
                        y: exitY,
                        rotation: (this.x / 200) * 45,
                        opacity: 0,
                        duration: 0.4,
                        ease: "power2.in",
                        onComplete: () => {
                          // Hide card completely and reset position off-screen
                          gsap.set(this.target, {
                            x: 0,
                            y: 0,
                            rotation: 0,
                            opacity: 0,
                            visibility: 'hidden',
                          });
                          
                          // Move card to back of stack
                          setCardOrder(prev => {
                            const newOrder = [...prev];
                            const removedCard = newOrder.pop()!;
                            newOrder.unshift(removedCard);
                            return newOrder;
                          });
                        }
                      });
                    } else {
                      // Snap back to center
                      gsap.to(this.target, {
                        x: 0,
                        y: 0,
                        rotation: 0,
                        opacity: 1,
                        duration: 0.5,
                        ease: "elastic.out(1, 0.5)",
                      });
                    }
                  }
                })[0];

                draggablesRef.current = [draggable];
              }
            }, 100);
          }
        }
      );
    }, containerRef);

    return () => {
      draggablesRef.current.forEach(d => {
        if (d) d.kill();
      });
      draggablesRef.current = [];
      ctx.revert();
    };
  }, [isMobile, animationDelay]);

  // Update stack positions when order changes
  useEffect(() => {
    if (!isMobile || !containerRef.current) return;

    // Small delay to prevent flickering during state update
    const timeout = setTimeout(() => {
      cardOrder.forEach((cardIdx, stackPos) => {
        const card = containerRef.current?.querySelector(
          `.mobile-stack-card-${cardIdx}`
        );
        if (card) {
          const offset = (cardOrder.length - 1 - stackPos) * 8;
          const scale = 1 - (cardOrder.length - 1 - stackPos) * 0.05;
          const targetOpacity = stackPos >= cardOrder.length - 3 ? 1 : 0.5;
          
          // Kill any existing animations on this card first
          gsap.killTweensOf(card);
          
          // For the card that just moved to the back (position 0), set it immediately without animation
          if (stackPos === 0) {
            gsap.set(card, {
              y: -offset,
              scale: scale,
              zIndex: stackPos,
              opacity: 0,
              visibility: 'visible',
            });
            
            // Fade it in after a brief delay
            gsap.to(card, {
              opacity: targetOpacity,
              duration: 0.3,
              delay: 0.2,
              ease: "power2.out",
            });
          } else {
            // Other cards animate normally
            gsap.set(card, {
              visibility: 'visible',
            });
            
            gsap.to(card, {
              y: -offset,
              scale: scale,
              zIndex: stackPos,
              opacity: targetOpacity,
              duration: 0.4,
              ease: "power2.out",
              overwrite: "auto",
            });
          }
        }
      });

      // Re-enable dragging on new top card with slight delay
      setTimeout(() => {
        const topCardIdx = cardOrder[cardOrder.length - 1];
        const topCard = containerRef.current?.querySelector(
          `.mobile-stack-card-${topCardIdx}`
        );

        if (topCard) {
          // Clean up old draggables
          draggablesRef.current.forEach(d => {
            if (d) {
              d.kill();
            }
          });
          draggablesRef.current = [];
          
          const draggable = Draggable.create(topCard, {
            type: "x,y",
            bounds: { minX: -200, maxX: 200, minY: -200, maxY: 200 },
            inertia: true,
            onDrag: function() {
              const distance = Math.abs(this.x) + Math.abs(this.y);
              const rotation = (this.x / 200) * 15;
              const opacity = Math.max(0.3, 1 - distance / 300);
              
              gsap.set(this.target, {
                rotation: rotation,
                opacity: opacity,
              });
            },
            onDragEnd: function() {
              const distance = Math.abs(this.x) + Math.abs(this.y);
              
              if (distance > 120) {
                const angle = Math.atan2(this.y, this.x);
                const exitX = Math.cos(angle) * 600;
                const exitY = Math.sin(angle) * 600;
                
                gsap.to(this.target, {
                  x: exitX,
                  y: exitY,
                  rotation: (this.x / 200) * 45,
                  opacity: 0,
                  duration: 0.4,
                  ease: "power2.in",
                  onComplete: () => {
                    // Hide card completely and reset position
                    gsap.set(this.target, {
                      x: 0,
                      y: 0,
                      rotation: 0,
                      opacity: 0,
                      visibility: 'hidden',
                    });
                    
                    // Update card order
                    setCardOrder(prev => {
                      const newOrder = [...prev];
                      const removedCard = newOrder.pop()!;
                      newOrder.unshift(removedCard);
                      return newOrder;
                    });
                  }
                });
              } else {
                gsap.to(this.target, {
                  x: 0,
                  y: 0,
                  rotation: 0,
                  opacity: 1,
                  duration: 0.5,
                  ease: "elastic.out(1, 0.5)",
                });
              }
            }
          })[0];

          draggablesRef.current = [draggable];
        }
      }, 100);
    }, 50);

    return () => clearTimeout(timeout);
  }, [cardOrder, isMobile]);

  const getNoRotationTransform = (transformStr: string) => {
    const hasRotate = /rotate\([\s\S]*?\)/.test(transformStr);
    if (hasRotate) {
      return transformStr.replace(/rotate\([\s\S]*?\)/, "rotate(0deg)");
    } else if (transformStr === "none") {
      return "rotate(0deg)";
    } else {
      return `${transformStr} rotate(0deg)`;
    }
  };

  const getPushedTransform = (baseTransform: string, offsetX: number) => {
    const translateRegex = /translate\(([-0-9.]+)px\)/;
    const match = baseTransform.match(translateRegex);
    if (match) {
      const currentX = parseFloat(match[1]);
      const newX = currentX + offsetX;
      return baseTransform.replace(translateRegex, `translate(${newX}px)`);
    } else {
      return baseTransform === "none"
        ? `translate(${offsetX}px)`
        : `${baseTransform} translate(${offsetX}px)`;
    }
  };

  const pushSiblings = useCallback(
    (hoveredIdx: number) => {
      if (!enableHover || !containerRef.current || isMobile) return;

      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
        hoverTimeoutRef.current = null;
      }

      setActiveIndex(hoveredIdx);

      const q = gsap.utils.selector(containerRef);

      children.forEach((_, i) => {
        const target = q(`.bounce-card-${i}`);
        
        gsap.killTweensOf(target, "transform,scale,zIndex");

        const baseTransform = transformStyles[i] || "none";

        if (i === hoveredIdx) {
          const noRotationTransform = getNoRotationTransform(baseTransform);
          gsap.to(target, {
            transform: noRotationTransform,
            scale: 1.08,
            zIndex: 100,
            duration: 0.4,
            ease: "power2.out",
            overwrite: false,
          });
        } else {
          const distance = Math.abs(hoveredIdx - i);
          const baseOffset = 60;
          const offsetX = (i < hoveredIdx ? -1 : 1) * (baseOffset + distance * 10);
          const pushedTransform = getPushedTransform(baseTransform, offsetX);

          gsap.to(target, {
            transform: pushedTransform,
            scale: 0.94,
            zIndex: 50 - distance * 5,
            duration: 0.4,
            ease: "power2.out",
            overwrite: false,
          });
        }
      });
    },
    [enableHover, children, transformStyles, isMobile]
  );

  const resetSiblings = useCallback(() => {
    if (!enableHover || !containerRef.current || isMobile) return;

    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    hoverTimeoutRef.current = setTimeout(() => {
      setActiveIndex(null);

      const q = gsap.utils.selector(containerRef);

      children.forEach((_, i) => {
        const target = q(`.bounce-card-${i}`);
        
        gsap.killTweensOf(target, "transform,scale,zIndex");
        
        const baseTransform = transformStyles[i] || "none";
        
        gsap.to(target, {
          transform: baseTransform,
          scale: 1,
          zIndex: i + 1,
          duration: 0.5,
          ease: "power2.out",
          overwrite: false,
        });
      });
    }, 50);
  }, [enableHover, children, transformStyles, isMobile]);

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  if (isMobile) {
    return (
      <div
        className={`mobile-stack-container ${className}`}
        ref={containerRef}
        style={{
          position: "relative",
          width: "100%",
          height: containerHeight,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          touchAction: "none",
        }}
      >
        {children.map((child, idx) => (
          <div
            key={idx}
            className={`mobile-stack-card mobile-stack-card-${idx}`}
            style={{
              position: "absolute",
              touchAction: "none",
              cursor: "grab",
            }}
          >
            {child}
          </div>
        ))}
        
        {/* Swipe indicator */}
        <div 
          className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2 text-gray-400 text-xs font-medium"
          style={{ pointerEvents: "none" }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 4L10 16M10 16L6 12M10 16L14 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Swipe to explore</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`bounce-cards-container ${className}`}
      ref={containerRef}
      style={{
        position: "relative",
        width: containerWidth,
        height: containerHeight,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children.map((child, idx) => (
        <div
          key={idx}
          className={`bounce-card bounce-card-${idx}`}
          style={{
            position: "absolute",
            transform: transformStyles[idx] ?? "none",
            zIndex: idx + 1,
            cursor: enableHover ? "pointer" : "default",
            willChange: activeIndex !== null ? "transform" : "auto",
          }}
          onMouseEnter={() => pushSiblings(idx)}
          onMouseLeave={resetSiblings}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
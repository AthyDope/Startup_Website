import React, { useState, useEffect, useRef, useMemo } from 'react';

const AnimatedCounter = ({ value, duration = 4000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  // Convert value to string to handle direct numbers
  const stringValue = String(value);

  // Parse only once per value change to avoid rerenders returning new array references
  const { prefix, target, isFloat, suffix, hasComma } = useMemo(() => {
    const match = stringValue.match(/^([^0-9.-]*)([0-9.,]+)(.*)$/);
    if (!match) return { prefix: stringValue, target: null, isFloat: false, suffix: '', hasComma: false };
    
    const numStr = match[2];
    const hasComma = numStr.includes(',');
    const parsedTarget = parseFloat(numStr.replace(/,/g, ''));
    
    return {
      prefix: match[1],
      target: isNaN(parsedTarget) ? null : parsedTarget,
      isFloat: numStr.includes('.'),
      suffix: match[3],
      hasComma
    };
  }, [stringValue]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.1 }
    );
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || target === null) return;

    let startTime = null;
    let reqId;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easing = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = target * easing;

      setCount(currentVal);

      if (progress < 1) {
        reqId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    reqId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(reqId);
  }, [isVisible, target, duration]);

  if (target === null) return <span ref={elementRef}>{value}</span>;

  let displayValue;
  if (isFloat) {
    displayValue = count.toFixed(1);
  } else {
    displayValue = Math.floor(count);
    if (hasComma) {
      displayValue = displayValue.toLocaleString('en-US');
    }
  }

  return (
    <span ref={elementRef} className="tabular-nums">
      {prefix}{displayValue}{suffix}
    </span>
  );
};

export default AnimatedCounter;

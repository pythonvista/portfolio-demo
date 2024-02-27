import {useRef, memo} from 'react';
import {useInView} from 'framer-motion';

interface AnimateSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const AnimateSection = memo(function ({
  children,
  className,
  ...props
}: AnimateSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref} className={'animate ' + className} {...props}>
      <span
        style={{
          transform: isInView ? 'none' : 'translateX(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s'
        }}
      >
        {children}
      </span>
    </div>
  );
});

export default AnimateSection;

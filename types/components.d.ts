import { FC, ReactNode } from 'react';

declare module '@/components/ui/background-gradient' {
  export interface BackgroundGradientProps {
    children: ReactNode;
    className?: string;
    containerClassName?: string;
    animate?: boolean;
  }
  
  export const BackgroundGradient: FC<BackgroundGradientProps>;
}

declare module '@/components/ui/text-generate-effect' {
  export interface TextGenerateEffectProps {
    words: string;
    className?: string;
    children?: ReactNode;
  }
  
  export const TextGenerateEffect: FC<TextGenerateEffectProps>;
}

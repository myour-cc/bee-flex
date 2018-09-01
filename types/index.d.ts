export default function(
  configs: { design?: number; max?: number },
  callback?: (
    options: {
      design: number;
      scale: boolean;
      width: number;
      height: number;
      dpr: number;
      rem: number;
      max: number;
    }
  ) => {}
): object;

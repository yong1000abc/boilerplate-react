type BuildMode = 'production' | 'development';

type BuildEnvType = {
  version: string;
  mode: BuildMode;
}

export const BuildEnv: BuildEnvType = {
  version: process.env.version || '',
  mode: (process.env.mode as BuildMode) || 'development'
};
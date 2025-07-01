import { useHistory, useLocation } from 'react-router';

export const PATHS = {
  BASE: '/sequencer/session',
  INFO: '/sequencer/session/info',
  LOAD: '/sequencer/session/load',
  SAVE: '/sequencer/session/save',
  LOGIN: '/sequencer/session/login',
  CHANGE_KIT: '/sequencer/session/kits',
  GLOBAL_MIXER: '/sequencer/session/mixer/main',
  SAMPLE_MIXER: '/sequencer/session/mixer/samples',
};

export const useGoTo = () => {
  const history = useHistory();
  const goToFunc = (path, cb) => {
    history.push(path);
    document.getElementById('root').scrollTop = 0;
    if (!cb || typeof cb !== 'function') return;
    cb();
  };
  const goTo = {};
  goTo.base = (cb) => goToFunc(PATHS.BASE, cb);
  goTo.info = (cb) => goToFunc(PATHS.INFO, cb);
  goTo.load = (cb) => goToFunc(PATHS.LOAD, cb);
  goTo.save = (cb) => goToFunc(PATHS.SAVE, cb);
  goTo.login = (cb) => goToFunc(PATHS.LOGIN, cb);
  goTo.changeKit = (cb) => goToFunc(PATHS.CHANGE_KIT, cb);
  goTo.mainMixer = (cb) => goToFunc(PATHS.GLOBAL_MIXER, cb);
  goTo.sampleMixer = (cb) => goToFunc(PATHS.SAMPLE_MIXER, cb);

  return goTo;
};

export const useCurrentPath = () => {
  const path = {};
  const pathname = useLocation().pathname;
  path.selectingKit = pathname === PATHS.CHANGE_KIT;
  path.mixingMain = pathname === PATHS.GLOBAL_MIXER;
  path.mixingSamples = pathname === PATHS.SAMPLE_MIXER;
  path.mixing = path.mixingMain || path.mixingSamples;
  path.atBase = pathname === PATHS.BASE;
  path.showingInfo = pathname === PATHS.INFO;

  return path;
};
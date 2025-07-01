import kick_long from 'assets/audio/lush/kick_long.mp3';
import kick_mid from 'assets/audio/lush/kick_mid.mp3';
import kick_short from 'assets/audio/lush/kick_short.mp3';
import ch from 'assets/audio/lush/ch.mp3';
import oh from 'assets/audio/lush/oh.mp3';
import snr from 'assets/audio/lush/snr.mp3';
import tamb from 'assets/audio/lush/tamb.mp3';
import plop from 'assets/audio/lush/plop.mp3';
import clp from 'assets/audio/lush/clp.mp3';

export const lush = {
  name: 'lush',
  location: 'local',
  available: true,
  samples: [
    {
      name: 'long kick',
      path: kick_long,
      code: 'Numpad7',
      altCode: 'KeyQ',
      color: 0,
      icon: 'kick',
    },
    {
      name: 'med kick',
      path: kick_mid,
      code: 'Numpad8',
      altCode: 'KeyW',
      color: 1,
      icon: 'kick',
    },
    {
      name: 'short kick',
      path: kick_short,
      code: 'Numpad9',
      altCode: 'KeyE',
      color: 2,
      icon: 'kick',
    },
    {
      name: 'closed hat',
      path: ch,
      code: 'Numpad4',
      altCode: 'KeyA',
      color: 3,
      icon: 'ch',
    },
    {
      name: 'open hat',
      path: oh,
      code: 'Numpad5',
      altCode: 'KeyS',
      color: 4,
      icon: 'oh',
    },
    {
      name: 'snare',
      path: snr,
      code: 'Numpad6',
      altCode: 'KeyD',
      color: 5,
      icon: 'snr',
    },
    {
      name: 'tambourine',
      path: tamb,
      code: 'Numpad1',
      altCode: 'KeyZ',
      color: 6,
      icon: 'tamb',
    },
    {
      name: 'plop',
      path: plop,
      code: 'Numpad2',
      altCode: 'KeyX',
      color: 7,
      icon: 'wb',
    },
    {
      name: 'clap',
      path: clp,
      code: 'Numpad3',
      altCode: 'KeyC',
      color: 8,
      icon: 'clp',
    },
  ],
};
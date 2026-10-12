import type { IconName } from '../components/icons/types';

export interface AionFeatureModule {
  title: string;
  label: string;
  icon: IconName;
  badge?: string;
  features: string[];
}

/** Six operator modules shown on Aion 2 tier product pages */
export const aionCheatFeatureModules: AionFeatureModule[] = [
  {
    title: 'Aim Options',
    label: 'Combat assist',
    icon: 'crosshair',
    badge: 'Available',
    features: [
      'Enable Soft Aim',
      'Aim Key',
      'Aim FOV',
      'Aim Smooth',
      'Bone Selection (Head / Chest / Closest)',
      'Visible Check',
      'Ignore Friendly Faction',
      'Ignore Same Party / Alliance',
      'Draw FOV',
      'Draw Target Line',
      'Max Aim Distance',
    ],
  },
  {
    title: 'Player Visual Options',
    label: 'Player ESP',
    icon: 'eye',
    badge: 'Available',
    features: [
      'Player ESP',
      'Box Styles (Full / Corner)',
      'Skeleton',
      'Head Circle',
      'Health Bar',
      'Nameplate',
      'Class / Job',
      'Level',
      'Faction (Elyos / Asmodian / Balaur)',
      'Distance',
      'View Direction',
      'Flying / Grounded State',
      'Out of Screen Arrows',
      'Max ESP Distance',
    ],
  },
  {
    title: 'Flight / Aerial Options',
    label: 'Aerial awareness',
    icon: 'softAim',
    badge: 'Available',
    features: [
      'Aerial Target ESP',
      'Flight Path Markers',
      'Altitude Readout',
      'Glide / Wing State',
      'Sky Contested Zone Highlights',
    ],
  },
  {
    title: 'World / PvE Options',
    label: 'World ESP',
    icon: 'lootEsp',
    badge: 'Available',
    features: [
      'NPC / Mob ESP',
      'Elite Mob Markers',
      'World Boss ESP',
      'Dungeon Boss Markers',
      'Quest Objective Markers',
      'Gathering Node ESP',
      'Ore / Herb / Material Filters',
      'Chest / Loot Object ESP',
      'Portal / Instance Entrance Markers',
      'Max World Distance',
    ],
  },
  {
    title: 'Radar Options',
    label: '2D radar',
    icon: 'radar',
    badge: 'Available',
    features: [
      '2D Radar',
      'Player Markers',
      'Faction Color Coding',
      'Boss Markers',
      'Node Markers',
      'Radar Range',
      'Radar Zoom',
    ],
  },
  {
    title: 'Misc Options',
    label: 'Overlay & config',
    icon: 'settings',
    badge: 'Available',
    features: [
      'Stream-Proof Overlay',
      'Combat Mode (Hide World ESP)',
      'Custom Crosshair',
      'Custom ESP Colors',
      'Visible / Hidden Colors',
      'Custom Menu Key',
      'Custom Panic Key',
      'Config System (Save / Load)',
    ],
  },
];

'use client';
/**
 * OrbitalHeroBackground (Studio - D Orbital)
 *
 * 4 lobes in a cross/clover pattern (2 pairs at 90 degrees).
 * Two orbital layers: one vertical+horizontal rotating CW,
 * another rotated 45 degrees rotating CCW.
 * Each quadrant breathes independently.
 * Energy dashes flow along the cross paths.
 * Pulsing nucleus at center.
 * Color: var(--color-primary) (ocean blue).
 */

import React from 'react';

const C = 'var(--color-primary)';

export const OrbitalHeroBackground: React.FC = () => {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      <svg
        viewBox="0 0 800 600"
        fill="none"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="dGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={C} stopOpacity="0.6" />
            <stop offset="100%" stopColor={C} stopOpacity="0.12" />
          </linearGradient>
          <radialGradient id="dGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={C} stopOpacity="0.25" />
            <stop offset="100%" stopColor={C} stopOpacity="0" />
          </radialGradient>
          <filter id="dBlur"><feGaussianBlur stdDeviation="5" /></filter>
        </defs>
        <style>{`
          @keyframes dRotCW { to { transform: rotate(360deg); } }
          @keyframes dRotCCW { to { transform: rotate(-360deg); } }
          @keyframes dBreath0 { 0%,100% { transform: scale(1); } 50% { transform: scale(1.1); } }
          @keyframes dBreath1 { 0%,100% { transform: scale(1); } 50% { transform: scale(1.14); } }
          @keyframes dBreath2 { 0%,100% { transform: scale(1); } 50% { transform: scale(1.08); } }
          @keyframes dBreath3 { 0%,100% { transform: scale(1); } 50% { transform: scale(1.12); } }
          @keyframes dDash { to { stroke-dashoffset: 0; } }
          @keyframes dNucPulse { 0%,100% { opacity: 0.5; r: 6; } 50% { opacity: 0.2; r: 12; } }
          @keyframes dNucGlow { 0%,100% { opacity: 0.15; } 50% { opacity: 0.25; } }

          .dLayerCW { animation: dRotCW 90s linear infinite; transform-origin: 400px 300px; opacity: 0.15; }
          .dLayerCCW { animation: dRotCCW 120s linear infinite; transform-origin: 400px 300px; opacity: 0.12; }

          .dLobeTop { animation: dBreath0 6s ease-in-out infinite; transform-origin: 400px 300px; }
          .dLobeRight { animation: dBreath1 8s ease-in-out infinite; transform-origin: 400px 300px; }
          .dLobeBottom { animation: dBreath2 7s ease-in-out infinite; transform-origin: 400px 300px; }
          .dLobeLeft { animation: dBreath3 9s ease-in-out infinite; transform-origin: 400px 300px; }

          .dDashPath { stroke-dasharray: 18 28; animation: dDash 4s linear infinite; opacity: 0.2; }
          .dDashPath2 { stroke-dasharray: 12 36; animation: dDash 6s linear infinite; opacity: 0.15; }

          .dNucleus { animation: dNucPulse 4s ease-in-out infinite; }
          .dNucGlow { animation: dNucGlow 5s ease-in-out infinite; }
        `}</style>

        {/* Background glow */}
        <circle cx="400" cy="300" r="180" fill="url(#dGlow)" className="dNucGlow" />

        {/* Layer 1: Cross pair (0 and 90 degrees), rotating CW */}
        <g className="dLayerCW">
          {/* Vertical pair (top + bottom) */}
          <g className="dLobeTop">
            <ellipse cx="400" cy="170" rx="70" ry="160" stroke="url(#dGrad)" strokeWidth="1.5" />
          </g>
          <g className="dLobeBottom">
            <ellipse cx="400" cy="430" rx="70" ry="160" stroke="url(#dGrad)" strokeWidth="1.5" />
          </g>
          {/* Horizontal pair (left + right) */}
          <g className="dLobeRight">
            <ellipse cx="400" cy="170" rx="70" ry="160" stroke="url(#dGrad)" strokeWidth="1.5" transform="rotate(90 400 300)" />
          </g>
          <g className="dLobeLeft">
            <ellipse cx="400" cy="430" rx="70" ry="160" stroke="url(#dGrad)" strokeWidth="1.5" transform="rotate(90 400 300)" />
          </g>

          {/* Energy dashes along cross axes */}
          <ellipse cx="400" cy="170" rx="70" ry="160" stroke={C} strokeWidth="1" className="dDashPath" />
          <ellipse cx="400" cy="430" rx="70" ry="160" stroke={C} strokeWidth="1" className="dDashPath" />
          <ellipse cx="400" cy="170" rx="70" ry="160" stroke={C} strokeWidth="1" className="dDashPath" transform="rotate(90 400 300)" />
          <ellipse cx="400" cy="430" rx="70" ry="160" stroke={C} strokeWidth="1" className="dDashPath" transform="rotate(90 400 300)" />
        </g>

        {/* Layer 2: Rotated 45 degrees, rotating CCW */}
        <g className="dLayerCCW">
          <g transform="rotate(45 400 300)">
            <g className="dLobeTop">
              <ellipse cx="400" cy="185" rx="55" ry="135" stroke="url(#dGrad)" strokeWidth="1" />
            </g>
            <g className="dLobeBottom">
              <ellipse cx="400" cy="415" rx="55" ry="135" stroke="url(#dGrad)" strokeWidth="1" />
            </g>
            <g className="dLobeRight">
              <ellipse cx="400" cy="185" rx="55" ry="135" stroke="url(#dGrad)" strokeWidth="1" transform="rotate(90 400 300)" />
            </g>
            <g className="dLobeLeft">
              <ellipse cx="400" cy="415" rx="55" ry="135" stroke="url(#dGrad)" strokeWidth="1" transform="rotate(90 400 300)" />
            </g>

            {/* Energy dashes on inner layer */}
            <ellipse cx="400" cy="185" rx="55" ry="135" stroke={C} strokeWidth="0.8" className="dDashPath2" />
            <ellipse cx="400" cy="415" rx="55" ry="135" stroke={C} strokeWidth="0.8" className="dDashPath2" />
            <ellipse cx="400" cy="185" rx="55" ry="135" stroke={C} strokeWidth="0.8" className="dDashPath2" transform="rotate(90 400 300)" />
            <ellipse cx="400" cy="415" rx="55" ry="135" stroke={C} strokeWidth="0.8" className="dDashPath2" transform="rotate(90 400 300)" />
          </g>
        </g>

        {/* Nucleus */}
        <circle cx="400" cy="300" r="6" fill={C} opacity="0.5" className="dNucleus" filter="url(#dBlur)" />
        <circle cx="400" cy="300" r="2.5" fill={C} opacity="0.7" />
      </svg>
    </div>
  );
};

OrbitalHeroBackground.displayName = 'OrbitalHeroBackground';

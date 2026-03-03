import React from 'react';
import { motion } from 'framer-motion';

const pencil = {
  dark: 'hsl(210 8% 40%)',
  medium: 'hsl(210 6% 55%)',
  light: 'hsl(210 5% 68%)',
  warm: 'hsl(25 10% 52%)',
  cool: 'hsl(195 8% 50%)',
};

// A single repeating tile with ~50 tiny doodle icons packed tightly
// Tile size: 200x200, repeated via SVG pattern to fill entire background
const DoodleTile = () => (
  <g strokeLinecap="round" strokeLinejoin="round" fill="none">
    {/* --- Phones / devices --- */}
    <g stroke={pencil.medium} strokeWidth="0.6" opacity="0.22">
      <rect x="8" y="5" width="8" height="14" rx="1.5" />
      <line x1="10.5" y1="16" x2="13.5" y2="16" />
    </g>
    {/* Laptop */}
    <g stroke={pencil.light} strokeWidth="0.5" opacity="0.18">
      <rect x="38" y="10" width="14" height="9" rx="1" />
      <line x1="35" y1="19" x2="55" y2="19" />
    </g>
    {/* Camera */}
    <g stroke={pencil.warm} strokeWidth="0.5" opacity="0.2">
      <rect x="70" y="6" width="12" height="9" rx="1.5" />
      <circle cx="76" cy="10.5" r="3" />
      <rect x="73" y="5" width="4" height="2" rx="0.5" />
    </g>
    {/* Headphones */}
    <g stroke={pencil.cool} strokeWidth="0.5" opacity="0.2">
      <path d="M100 18c0-6 3-10 7-10s7 4 7 10" />
      <rect x="98" y="16" width="4" height="5" rx="1" />
      <rect x="112" y="16" width="4" height="5" rx="1" />
    </g>
    {/* Globe */}
    <g stroke={pencil.medium} strokeWidth="0.45" opacity="0.18">
      <circle cx="138" cy="12" r="7" />
      <ellipse cx="138" cy="12" rx="3" ry="7" />
      <line x1="131" y1="12" x2="145" y2="12" />
    </g>
    {/* Envelope / mail */}
    <g stroke={pencil.warm} strokeWidth="0.5" opacity="0.2">
      <rect x="162" y="7" width="14" height="10" rx="1" />
      <path d="M162 7l7 6 7-6" />
    </g>
    {/* Star */}
    <path d="M190 10l1.5 3 3.5.5-2.5 2.5.6 3.5-3.1-1.6-3.1 1.6.6-3.5-2.5-2.5 3.5-.5z" stroke={pencil.light} strokeWidth="0.5" opacity="0.2" />

    {/* --- Row 2 --- */}
    {/* Heart */}
    <path d="M12 38c-4-6 6-10 0-2 6-8-4 4 0 2z" stroke={pencil.warm} strokeWidth="0.5" opacity="0.2" />
    {/* Music note */}
    <g stroke={pencil.cool} strokeWidth="0.5" opacity="0.2">
      <line x1="38" y1="28" x2="38" y2="40" />
      <circle cx="36" cy="40" r="2.5" />
      <path d="M38 28c4-1 6 0 6 2" />
    </g>
    {/* Coffee cup */}
    <g stroke={pencil.medium} strokeWidth="0.5" opacity="0.2">
      <path d="M60 30h10v10c0 2-2 3-5 3s-5-1-5-3z" />
      <path d="M70 32c3 0 4 1 4 3s-1 3-4 3" />
      <path d="M63 28c0-2 1-2 2 0" />
      <path d="M66 27c0-2 1-3 2 0" />
    </g>
    {/* Lightbulb */}
    <g stroke={pencil.warm} strokeWidth="0.5" opacity="0.2">
      <path d="M96 28c-4 0-6 3-6 6 0 2 2 3 2 5h8c0-2 2-3 2-5 0-3-2-6-6-6z" />
      <line x1="93" y1="39" x2="99" y2="39" />
      <line x1="93" y1="41" x2="99" y2="41" />
    </g>
    {/* Clock */}
    <g stroke={pencil.light} strokeWidth="0.5" opacity="0.18">
      <circle cx="125" cy="35" r="7" />
      <line x1="125" y1="35" x2="125" y2="30" />
      <line x1="125" y1="35" x2="129" y2="35" />
    </g>
    {/* Book */}
    <g stroke={pencil.cool} strokeWidth="0.5" opacity="0.2">
      <path d="M150 28c4-1 8-1 10 0v14c-2-1-6-1-10 0z" />
      <path d="M150 28c-4-1-8-1-10 0v14c2-1 6-1 10 0z" />
    </g>
    {/* Key */}
    <g stroke={pencil.medium} strokeWidth="0.5" opacity="0.18">
      <circle cx="178" cy="32" r="4" />
      <line x1="182" y1="32" x2="192" y2="32" />
      <line x1="189" y1="32" x2="189" y2="35" />
      <line x1="192" y1="32" x2="192" y2="35" />
    </g>

    {/* --- Row 3 --- */}
    {/* Rocket */}
    <g stroke={pencil.warm} strokeWidth="0.5" opacity="0.2">
      <path d="M15 55c-1-5 2-10 5-14 3 4 6 9 5 14z" />
      <path d="M15 55c-3 0-4 2-3 4l3-1" />
      <path d="M25 55c3 0 4 2 3 4l-3-1" />
    </g>
    {/* Palette */}
    <g stroke={pencil.cool} strokeWidth="0.5" opacity="0.18">
      <path d="M45 50c-5 2-8 8-5 13s10 5 14 1c2-2 0-4-2-4-3 0-3-3 0-4 2-1 2-3-1-5-2-2-4-2-6-1z" />
      <circle cx="43" cy="57" r="1" />
      <circle cx="46" cy="53" r="1" />
    </g>
    {/* Paper airplane */}
    <g stroke={pencil.medium} strokeWidth="0.5" opacity="0.2">
      <path d="M70 48l20 7-20 7 4-7z" />
      <line x1="74" y1="55" x2="90" y2="55" />
    </g>
    {/* Wifi symbol */}
    <g stroke={pencil.light} strokeWidth="0.5" opacity="0.18">
      <path d="M105 60a12 12 0 0 1 16 0" />
      <path d="M108 57a8 8 0 0 1 10 0" />
      <path d="M111 54a4 4 0 0 1 4 0" />
      <circle cx="113" cy="62" r="1" />
    </g>
    {/* Sun */}
    <g stroke={pencil.warm} strokeWidth="0.5" opacity="0.2">
      <circle cx="140" cy="55" r="4" />
      <line x1="140" y1="48" x2="140" y2="50" />
      <line x1="140" y1="60" x2="140" y2="62" />
      <line x1="133" y1="55" x2="135" y2="55" />
      <line x1="145" y1="55" x2="147" y2="55" />
      <line x1="135" y1="50" x2="136.5" y2="51.5" />
      <line x1="143.5" y1="58.5" x2="145" y2="60" />
      <line x1="135" y1="60" x2="136.5" y2="58.5" />
      <line x1="143.5" y1="51.5" x2="145" y2="50" />
    </g>
    {/* Cloud */}
    <g stroke={pencil.cool} strokeWidth="0.5" opacity="0.18">
      <path d="M165 58c-2-6 4-10 8-7 1-4 7-4 8 0 4-2 7 2 5 5-1 2-3 3-6 3h-12c-3 0-4-1-3-1z" />
    </g>
    {/* Gamepad */}
    <g stroke={pencil.medium} strokeWidth="0.5" opacity="0.2">
      <path d="M185 50c-3 0-5 2-5 5v4c0 2 1 3 3 3s3-2 4-4h6c1 2 2 4 4 4s3-1 3-3v-4c0-3-2-5-5-5z" />
      <line x1="188" y1="53" x2="188" y2="57" />
      <line x1="186" y1="55" x2="190" y2="55" />
      <circle cx="195" cy="54" r="0.8" />
      <circle cx="197" cy="56" r="0.8" />
    </g>

    {/* --- Row 4 --- */}
    {/* Bicycle */}
    <g stroke={pencil.light} strokeWidth="0.5" opacity="0.18">
      <circle cx="12" cy="82" r="5" />
      <circle cx="28" cy="82" r="5" />
      <path d="M12 82l6-8h6l4 8" />
      <line x1="18" y1="74" x2="22" y2="74" />
    </g>
    {/* Pizza slice */}
    <g stroke={pencil.warm} strokeWidth="0.5" opacity="0.2">
      <path d="M45 72l-7 16h14z" />
      <circle cx="43" cy="80" r="1" />
      <circle cx="47" cy="82" r="1" />
      <circle cx="45" cy="77" r="0.8" />
    </g>
    {/* Speech bubble */}
    <g stroke={pencil.cool} strokeWidth="0.5" opacity="0.2">
      <path d="M65 72c-4 0-7 3-7 6s3 6 7 6c1 0 2 0 3-.5l4 2.5-1-3.5c2-1.2 3-3 3-4.5 0-3-3-6-7-6h-2z" />
      <line x1="62" y1="76" x2="72" y2="76" />
      <line x1="62" y1="79" x2="70" y2="79" />
    </g>
    {/* Diamond gem */}
    <g stroke={pencil.medium} strokeWidth="0.5" opacity="0.18">
      <path d="M95 72l-7 5 7 10 7-10z" />
      <line x1="88" y1="77" x2="102" y2="77" />
      <line x1="95" y1="72" x2="92" y2="77" />
      <line x1="95" y1="72" x2="98" y2="77" />
    </g>
    {/* Flower */}
    <g stroke={pencil.warm} strokeWidth="0.5" opacity="0.2">
      <circle cx="125" cy="75" r="2" />
      <circle cx="125" cy="71" r="2.5" />
      <circle cx="128" cy="73.5" r="2.5" />
      <circle cx="127" cy="77.5" r="2.5" />
      <circle cx="123" cy="77.5" r="2.5" />
      <circle cx="122" cy="73.5" r="2.5" />
      <line x1="125" y1="77" x2="125" y2="88" />
      <path d="M125 83c-2-1-4 0-5 2" />
    </g>
    {/* Atom */}
    <g stroke={pencil.cool} strokeWidth="0.45" opacity="0.18">
      <circle cx="155" cy="80" r="1.5" />
      <ellipse cx="155" cy="80" rx="8" ry="3" />
      <ellipse cx="155" cy="80" rx="8" ry="3" transform="rotate(60 155 80)" />
      <ellipse cx="155" cy="80" rx="8" ry="3" transform="rotate(-60 155 80)" />
    </g>
    {/* Scissors */}
    <g stroke={pencil.medium} strokeWidth="0.5" opacity="0.2">
      <circle cx="182" cy="78" r="3" />
      <circle cx="182" cy="86" r="3" />
      <path d="M185 78l8 4" />
      <path d="M185 86l8-4" />
    </g>

    {/* --- Row 5 --- */}
    {/* Crown */}
    <g stroke={pencil.warm} strokeWidth="0.5" opacity="0.2">
      <path d="M5 105l3-8 4 5 4-5 4 5 3-8v10H5z" />
    </g>
    {/* Umbrella */}
    <g stroke={pencil.cool} strokeWidth="0.5" opacity="0.18">
      <path d="M38 100c0-6 5-10 10-10s10 4 10 10" />
      <line x1="48" y1="95" x2="48" y2="110" />
      <path d="M48 110c0 2 2 3 3 2" />
    </g>
    {/* Guitar */}
    <g stroke={pencil.medium} strokeWidth="0.5" opacity="0.2">
      <line x1="75" y1="92" x2="75" y2="104" />
      <ellipse cx="75" cy="107" rx="5" ry="4" />
      <circle cx="75" cy="107" r="1.5" />
      <rect x="73" y="92" width="4" height="3" rx="1" />
    </g>
    {/* Hourglass */}
    <g stroke={pencil.light} strokeWidth="0.5" opacity="0.18">
      <line x1="100" y1="92" x2="112" y2="92" />
      <line x1="100" y1="112" x2="112" y2="112" />
      <path d="M101 92c0 5 5 8 5 10s-5 5-5 10" />
      <path d="M111 92c0 5-5 8-5 10s5 5 5 10" />
    </g>
    {/* Anchor */}
    <g stroke={pencil.cool} strokeWidth="0.5" opacity="0.2">
      <circle cx="138" cy="95" r="2.5" />
      <line x1="138" y1="97.5" x2="138" y2="110" />
      <path d="M131 106c0 5 3 7 7 7s7-2 7-7" />
      <line x1="135" y1="101" x2="141" y2="101" />
    </g>
    {/* Paper clip */}
    <g stroke={pencil.warm} strokeWidth="0.5" opacity="0.18">
      <path d="M165 95c0-2 2-3 4-3s4 1 4 3v12c0 3-2 5-4 5s-4-2-4-5v-9c0-1 1-2 2-2s2 1 2 2v8" />
    </g>
    {/* Arrow target */}
    <g stroke={pencil.medium} strokeWidth="0.5" opacity="0.2">
      <circle cx="192" cy="102" r="7" />
      <circle cx="192" cy="102" r="4" />
      <circle cx="192" cy="102" r="1.5" />
    </g>

    {/* --- Row 6 --- */}
    {/* Cat face */}
    <g stroke={pencil.warm} strokeWidth="0.5" opacity="0.2">
      <circle cx="15" cy="130" r="6" />
      <path d="M9 124l2 5" />
      <path d="M21 124l-2 5" />
      <circle cx="13" cy="129" r="0.8" />
      <circle cx="17" cy="129" r="0.8" />
      <path d="M14 132c1 1 2 1 2 0" />
      <line x1="9" y1="130" x2="6" y2="128" />
      <line x1="9" y1="131" x2="6" y2="132" />
      <line x1="21" y1="130" x2="24" y2="128" />
      <line x1="21" y1="131" x2="24" y2="132" />
    </g>
    {/* Leaf */}
    <g stroke={pencil.cool} strokeWidth="0.5" opacity="0.18">
      <path d="M42 122c8 0 14 6 14 14-8 0-14-6-14-14z" />
      <path d="M42 136c4-4 9-9 14-14" />
    </g>
    {/* Trophy */}
    <g stroke={pencil.medium} strokeWidth="0.5" opacity="0.2">
      <path d="M68 120h10v8c0 3-2 4-5 4s-5-1-5-4z" />
      <path d="M68 122c-3 0-4 2-4 4s1 4 4 4" />
      <path d="M78 122c3 0 4 2 4 4s-1 4-4 4" />
      <line x1="73" y1="132" x2="73" y2="136" />
      <line x1="69" y1="136" x2="77" y2="136" />
    </g>
    {/* Compass */}
    <g stroke={pencil.light} strokeWidth="0.45" opacity="0.18">
      <circle cx="100" cy="128" r="7" />
      <path d="M100 122l2 5-2 1-2-1z" />
      <path d="M100 134l-2-5 2-1 2 1z" />
    </g>
    {/* Cactus */}
    <g stroke={pencil.warm} strokeWidth="0.5" opacity="0.2">
      <rect x="128" y="122" width="5" height="14" rx="2.5" />
      <path d="M128 128c-3 0-4-2-4-4" />
      <path d="M133 126c3 0 4 2 4 5" />
      <line x1="127" y1="136" x2="134" y2="136" />
    </g>
    {/* Lightning bolt */}
    <g stroke={pencil.cool} strokeWidth="0.5" opacity="0.2">
      <path d="M158 120l-4 8h6l-4 8" />
    </g>
    {/* Pencil */}
    <g stroke={pencil.medium} strokeWidth="0.5" opacity="0.2">
      <path d="M178 120l12 12-2 2-12-12z" />
      <line x1="178" y1="120" x2="180" y2="118" />
      <line x1="188" y1="132" x2="189" y2="133" />
    </g>

    {/* --- Row 7 --- */}
    {/* House */}
    <g stroke={pencil.light} strokeWidth="0.5" opacity="0.18">
      <path d="M12 155l8-8 8 8" />
      <rect x="13" y="155" width="14" height="10" />
      <rect x="18" y="158" width="4" height="7" />
    </g>
    {/* Magnifying glass */}
    <g stroke={pencil.warm} strokeWidth="0.5" opacity="0.2">
      <circle cx="48" cy="152" r="5" />
      <line x1="52" y1="156" x2="57" y2="161" />
    </g>
    {/* Cupcake */}
    <g stroke={pencil.cool} strokeWidth="0.5" opacity="0.18">
      <path d="M72 155h10l-1 10H73z" />
      <path d="M71 155c0-4 3-6 6-6s6 2 6 6" />
      <circle cx="77" cy="152" r="1.5" />
    </g>
    {/* Airplane */}
    <g stroke={pencil.medium} strokeWidth="0.5" opacity="0.2">
      <path d="M100 148l10 6-10 6v-4l-6 2v-4l6-2z" />
    </g>
    {/* Battery */}
    <g stroke={pencil.light} strokeWidth="0.5" opacity="0.18">
      <rect x="128" y="150" width="14" height="8" rx="1" />
      <rect x="142" y="152" width="2" height="4" rx="0.5" />
      <rect x="130" y="152" width="4" height="4" rx="0.5" />
      <rect x="135" y="152" width="4" height="4" rx="0.5" />
    </g>
    {/* Paw print */}
    <g stroke={pencil.warm} strokeWidth="0.5" opacity="0.2">
      <ellipse cx="160" cy="156" rx="3" ry="4" />
      <circle cx="156" cy="151" r="1.8" />
      <circle cx="160" cy="149" r="1.8" />
      <circle cx="164" cy="151" r="1.8" />
    </g>
    {/* Mountain */}
    <g stroke={pencil.cool} strokeWidth="0.5" opacity="0.18">
      <path d="M182 162l8-14 8 14z" />
      <path d="M188 152l-2 3 2 2 2-2z" />
    </g>

    {/* --- Row 8 --- */}
    {/* Gift box */}
    <g stroke={pencil.medium} strokeWidth="0.5" opacity="0.2">
      <rect x="8" y="178" width="12" height="10" />
      <rect x="7" y="175" width="14" height="4" rx="1" />
      <line x1="14" y1="175" x2="14" y2="188" />
      <path d="M14 175c-2-3-5-3-5 0" />
      <path d="M14 175c2-3 5-3 5 0" />
    </g>
    {/* Skull (cute) */}
    <g stroke={pencil.warm} strokeWidth="0.5" opacity="0.18">
      <path d="M42 172c-5 0-8 4-8 8 0 3 2 6 4 7v3h8v-3c2-1 4-4 4-7 0-4-3-8-8-8z" />
      <circle cx="39" cy="179" r="1.5" />
      <circle cx="45" cy="179" r="1.5" />
      <path d="M40 184v2" />
      <path d="M42 184v2" />
      <path d="M44 184v2" />
    </g>
    {/* Rainbow */}
    <g stroke={pencil.cool} strokeWidth="0.5" opacity="0.18">
      <path d="M65 188a12 12 0 0 1 24 0" />
      <path d="M68 188a9 9 0 0 1 18 0" />
      <path d="M71 188a6 6 0 0 1 12 0" />
    </g>
    {/* Eye */}
    <g stroke={pencil.medium} strokeWidth="0.5" opacity="0.2">
      <path d="M98 180c4-4 10-4 14 0-4 4-10 4-14 0z" />
      <circle cx="105" cy="180" r="2.5" />
      <circle cx="105" cy="180" r="1" />
    </g>
    {/* Beaker / flask */}
    <g stroke={pencil.light} strokeWidth="0.5" opacity="0.18">
      <path d="M132 172h6v6l4 10h-14l4-10z" />
      <line x1="130" y1="188" x2="140" y2="188" />
    </g>
    {/* Candy */}
    <g stroke={pencil.warm} strokeWidth="0.5" opacity="0.2">
      <circle cx="162" cy="180" r="4" />
      <path d="M158 180c-3-2-4-1-3 1" />
      <path d="M166 180c3 2 4 1 3-1" />
      <path d="M159 178l6 4" />
    </g>
    {/* Flag */}
    <g stroke={pencil.cool} strokeWidth="0.5" opacity="0.18">
      <line x1="188" y1="170" x2="188" y2="190" />
      <path d="M188 172h10c-1 3-1 6 0 9h-10z" />
    </g>

    {/* Extra small scattered marks for density */}
    {/* Dots */}
    <circle cx="25" cy="48" r="0.8" fill={pencil.medium} opacity="0.15" />
    <circle cx="55" cy="95" r="0.8" fill={pencil.warm} opacity="0.12" />
    <circle cx="85" cy="45" r="0.8" fill={pencil.cool} opacity="0.15" />
    <circle cx="115" cy="145" r="0.8" fill={pencil.medium} opacity="0.12" />
    <circle cx="145" cy="95" r="0.8" fill={pencil.warm} opacity="0.15" />
    <circle cx="175" cy="145" r="0.8" fill={pencil.cool} opacity="0.12" />
    <circle cx="30" cy="140" r="0.8" fill={pencil.light} opacity="0.12" />
    <circle cx="60" cy="170" r="0.8" fill={pencil.medium} opacity="0.15" />
    <circle cx="90" cy="120" r="0.8" fill={pencil.warm} opacity="0.12" />
    <circle cx="120" cy="170" r="0.8" fill={pencil.cool} opacity="0.15" />
    <circle cx="150" cy="42" r="0.8" fill={pencil.medium} opacity="0.12" />
    <circle cx="180" cy="100" r="0.8" fill={pencil.warm} opacity="0.15" />

    {/* Small x marks */}
    <g stroke={pencil.light} strokeWidth="0.4" opacity="0.12">
      <path d="M32 68l2 2m0-2l-2 2" />
      <path d="M82 138l2 2m0-2l-2 2" />
      <path d="M152 68l2 2m0-2l-2 2" />
      <path d="M112 38l2 2m0-2l-2 2" />
      <path d="M62 118l2 2m0-2l-2 2" />
      <path d="M172 38l2 2m0-2l-2 2" />
    </g>

    {/* Small circles */}
    <circle cx="50" cy="68" r="2.5" stroke={pencil.medium} strokeWidth="0.4" fill="none" opacity="0.12" />
    <circle cx="110" cy="68" r="2" stroke={pencil.cool} strokeWidth="0.4" fill="none" opacity="0.12" />
    <circle cx="170" cy="118" r="2.5" stroke={pencil.warm} strokeWidth="0.4" fill="none" opacity="0.12" />
    <circle cx="30" cy="168" r="2" stroke={pencil.light} strokeWidth="0.4" fill="none" opacity="0.12" />
    <circle cx="90" cy="168" r="2.5" stroke={pencil.medium} strokeWidth="0.4" fill="none" opacity="0.12" />
    <circle cx="150" cy="168" r="2" stroke={pencil.cool} strokeWidth="0.4" fill="none" opacity="0.12" />

    {/* Tiny squiggles */}
    <path d="M28 98q3-3 6 0q3 3 6 0" stroke={pencil.light} strokeWidth="0.4" fill="none" opacity="0.12" />
    <path d="M88 98q3-3 6 0q3 3 6 0" stroke={pencil.warm} strokeWidth="0.4" fill="none" opacity="0.12" />
    <path d="M148 118q3-3 6 0q3 3 6 0" stroke={pencil.medium} strokeWidth="0.4" fill="none" opacity="0.12" />
    <path d="M58 148q3-3 6 0q3 3 6 0" stroke={pencil.cool} strokeWidth="0.4" fill="none" opacity="0.12" />
    <path d="M118 198q3-3 6 0q3 3 6 0" stroke={pencil.light} strokeWidth="0.4" fill="none" opacity="0.12" />
  </g>
);

export const HeroDoodleBackground = () => {
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="whatsapp-doodle"
            x="0"
            y="0"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            <DoodleTile />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#whatsapp-doodle)" />
      </svg>
    </motion.div>
  );
};

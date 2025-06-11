import Image from "next/image";
import React from "react";

const BIRDS_CONFIG = [
  {
    id: 1,
    position: { left: "80%", top: "20%" },
    wings: {
      left: {
        src: "/images/leftWing2.svg",
        rotation: "rotate-[45deg]",
        position: "right-14 bottom-3",
      },
      right: {
        src: "/images/rightWing2.svg",
        rotation: "rotate-[25deg]",
        position: "right-4 bottom-2",
      },
    },
    body: {
      rotation: "rotate-[20deg]",
      position: "right-11 bottom-3",
      size: { width: 38, height: 26 },
    },
  },
  {
    id: 2,
    position: { left: "30%", top: "30%" },
    wings: {
      left: {
        src: "/images/leftWing2.svg",
        rotation: "rotate-[20deg]",
        position: "right-14 bottom-0",
      },
      right: {
        src: "/images/rightWing1.svg",
        rotation: "rotate-[-20deg]",
        position: "right-3 bottom-5",
      },
    },
    body: {
      rotation: "rotate-[-20deg]",
      position: "left-1 bottom-2",
      size: { width: 38, height: 26 },
    },
  },
  {
    id: 3,
    position: { left: "70%", top: "60%" },
    wings: {
      left: {
        src: "/images/leftWing1.svg",
        rotation: "rotate-[45deg]",
        position: "right-14 bottom-6",
      },
      right: {
        src: "/images/rightWing2.svg",
        rotation: "rotate-[15deg]",
        position: "right-5 bottom-4",
      },
    },
    body: {
      rotation: "rotate-[20deg]",
      position: "right-11 bottom-3",
      size: { width: 38, height: 26 },
    },
  },
  {
    id: 4,
    position: { left: "40%", top: "70%" },
    wings: {
      left: {
        src: "/images/leftWing1.svg",
        rotation: "rotate-[45deg]",
        position: "right-12 bottom-4",
      },
      right: {
        src: "/images/rightWing2.svg",
        rotation: "rotate-[15deg]",
        position: "right-8 bottom-4",
      },
    },
    body: {
      rotation: "rotate-[10deg]",
      position: "right-10 bottom-3",
      size: { width: 22, height: 20 },
    },
  },
  {
    id: 5,
    position: { left: "50%", top: "90%" },
    wings: {
      left: {
        src: "/images/leftWing1.svg",
        rotation: "rotate-[45deg]",
        position: "right-12 bottom-4",
      },
      right: {
        src: "/images/rightWing2.svg",
        rotation: "rotate-[15deg]",
        position: "right-9 bottom-4",
      },
    },
    body: {
      rotation: "rotate-[10deg]",
      position: "right-10.5 bottom-3",
      size: { width: 15, height: 10 },
    },
  },
  {
    id: 6,
    position: { left: "20%", top: "60%" },
    wings: {
      left: {
        src: "/images/leftWing1.svg",
        rotation: "",
        position: "right-14 bottom-2",
      },
      right: {
        src: "/images/rightWing2.svg",
        rotation: "rotate-[-25deg]",
        position: "right-9 bottom-6",
      },
    },
    body: {
      rotation: "rotate-[-20deg]",
      position: "right-11 bottom-3",
      size: { width: 30, height: 20 },
    },
  },
  {
    id: 7,
    position: { left: "-20%", top: "60%" },
    wings: {
      left: {
        src: "/images/leftWing1.svg",
        rotation: "",
        position: "right-16 bottom-2",
      },
      right: {
        src: "/images/rightWing2.svg",
        rotation: "rotate-[-25deg]",
        position: "right-9 bottom-6",
      },
    },
    body: {
      rotation: "rotate-[-20deg]",
      position: "right-13 bottom-4",
      size: { width: 28, height: 18 },
    },
  },
  {
    id: 8,
    position: { right: "-50%", top: "70%" },
    wings: {
      left: {
        src: "/images/leftWing1.svg",
        rotation: "rotate-[45deg]",
        position: "right-14 bottom-6",
      },
      right: {
        src: "/images/rightWing2.svg",
        rotation: "rotate-[15deg]",
        position: "right-6 bottom-4",
      },
    },
    body: {
      rotation: "rotate-[20deg]",
      position: "right-11 bottom-3",
      size: { width: 30, height: 20 },
    },
  },
];

const WING_SIZES = {
  1: { width: 50, height: 32 },
  2: { width: 50, height: 32 },
  3: { width: 40, height: 27 },
  4: { width: 20, height: 26 },
  5: { width: 12, height: 16 },
  6: { width: 32, height: 22, right: { width: 30, height: 20 } },
  7: { width: 40, height: 36 },
  8: { width: 36, height: 22 },
};

//  Bird component
const Bird = ({ config }) => {
  const { id, position, wings, body } = config;
  const wingSize = WING_SIZES[id];

  const positionStyles = position.left
    ? { left: position.left, top: position.top }
    : { right: position.right, top: position.top };

  return (
    <div className="absolute" style={positionStyles}>
      <div className="relative h-[15px] w-[73px]">
        {/* Left Wing */}
        <Image
          src={wings.left.src}
          alt={`Bird ${id} left wing`}
          width={wingSize.width}
          height={wingSize.height}
          className={`absolute ${wings.left.position} ${wings.left.rotation}`}
        />

        {/* Right Wing */}
        <Image
          src={wings.right.src}
          alt={`Bird ${id} right wing`}
          width={wingSize.right?.width || wingSize.width}
          height={wingSize.right?.height || wingSize.height}
          className={`absolute ${wings.right.position} ${wings.right.rotation}`}
        />

        {/* Body */}
        <Image
          src="/images/birdBody.svg"
          alt={`Bird ${id} body`}
          width={body.size.width}
          height={body.size.height}
          className={`absolute ${body.position} ${body.rotation}`}
        />
      </div>
    </div>
  );
};

const Sun = ({ children }) => (
  <div className="absolute left-1/3 md:left-1/2 top-0 md:top-3 z-50 h-[180px] w-[180px] sm:h-[200px] sm:w-[200px] md:h-[250px] md:w-[250px]">
    <div className="relative w-full h-full rounded-full bg-[linear-gradient(#c9ec06,_#1a5b43)]">
      {children}
    </div>
  </div>
);

const BirdsAndMountains = () => {
  return (
    <div className="flex flex-col justify-end">
      <div className="min-h-[287px] relative aspect-[1170/477] w-full mx-auto overflow-hidden">
        <Image
          src="/images/mountainerLand.svg"
          alt="Mountain landscape background"
          fill
          className="object-cover"
        />

        <Sun>
          {BIRDS_CONFIG.map((birdConfig) => (
            <Bird key={birdConfig.id} config={birdConfig} />
          ))}
        </Sun>
      </div>
    </div>
  );
};

export default BirdsAndMountains;

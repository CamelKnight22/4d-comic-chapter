import * as THREE from "three";
import { useEffect, useMemo, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useGraph } from "@react-three/fiber";
import { SkeletonUtils } from "three/examples/jsm/Addons.js";
import React from "react";

type GLTFResult = GLTF & {
  nodes: {
    back_hair: THREE.SkinnedMesh;
    eyeballs: THREE.SkinnedMesh;
    Eyebrow: THREE.SkinnedMesh;
    hair: THREE.SkinnedMesh;
    HeadHand: THREE.SkinnedMesh;
    Lower_Lessa: THREE.SkinnedMesh;
    Lower_Teeth: THREE.SkinnedMesh;
    Mouth: THREE.SkinnedMesh;
    pants: THREE.SkinnedMesh;
    shirt: THREE.SkinnedMesh;
    shoes: THREE.SkinnedMesh;
    Tongue: THREE.SkinnedMesh;
    Upper_Lessa: THREE.SkinnedMesh;
    Upper_Teeth: THREE.SkinnedMesh;
    rootx: THREE.Bone;
    c_eye_targetx: THREE.Bone;
  };
  materials: {
    ["Hair"]: THREE.MeshStandardMaterial;
    ["eye"]: THREE.MeshStandardMaterial;
    ["skin"]: THREE.MeshStandardMaterial;
    ["lessa"]: THREE.MeshStandardMaterial;
    ["teeth"]: THREE.MeshStandardMaterial;
    ["mouth"]: THREE.MeshStandardMaterial;
    ["pants"]: THREE.MeshStandardMaterial;
    ["shirt"]: THREE.MeshStandardMaterial;
    ["Shoes"]: THREE.MeshStandardMaterial;
    ["tongue"]: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

type ActionName =
  | "page1"
  | "page10"
  | "page2"
  | "page3"
  | "page4"
  | "page5"
  | "page6"
  | "page7"
  | "page8"
  | "page9";
  interface GLTFAction extends THREE.AnimationClip {
    name: ActionName;}

export function phill(props: JSX.IntrinsicElements["group"]& { animation: ActionName }) {
  const group = useRef<THREE.Group>(null);
  const original = useGLTF("/phill.glb") as GLTFResult;
  const graph = useGraph(SkeletonUtils.clone(original.scene));

  const { nodes, materials, animations } = useMemo(() => {
      // Use the result of useGraph
      const { nodes, materials } = graph;
      return { nodes, materials, animations: original.animations };
  }, [graph, original.animations]);

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && actions[props.animation]) {
      actions[props.animation]?.play();
    }
  }, [props.animation, actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="root">
          <skinnedMesh
            name="back_hair"
            geometry={(nodes.back_hair as THREE.SkinnedMesh).geometry}
            material={materials["Hair"]}
            skeleton={(nodes.back_hair as THREE.SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="eyeballs"
            geometry={(nodes.eyeballs as THREE.SkinnedMesh).geometry}
            material={materials["eye"]}
            skeleton={(nodes.eyeballs as THREE.SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="Eyebrow"
            geometry={(nodes.Eyebrow as THREE.SkinnedMesh).geometry}
            material={materials["Hair"]}
            skeleton={(nodes.Eyebrow as THREE.SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="hair"
            geometry={(nodes.hair as THREE.SkinnedMesh).geometry}
            material={materials["Hair"]}
            skeleton={(nodes.hair as THREE.SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="HeadHand"
            geometry={(nodes.HeadHand as THREE.SkinnedMesh).geometry}
            material={materials["skin"]}
            skeleton={(nodes.HeadHand as THREE.SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="Lower_Lessa"
            geometry={(nodes.Lower_Lessa as THREE.SkinnedMesh).geometry}
            material={materials["lessa"]}
            skeleton={(nodes.Lower_Lessa as THREE.SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="Lower_Teeth"
            geometry={(nodes.Lower_Teeth as THREE.SkinnedMesh).geometry}
            material={materials["teeth"]}
            skeleton={(nodes.Lower_Teeth as THREE.SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="Mouth"
            geometry={(nodes.Mouth as THREE.SkinnedMesh).geometry}
            material={materials["mouth"]}
            skeleton={(nodes.Mouth as THREE.SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="pants"
            geometry={(nodes.pants as THREE.SkinnedMesh).geometry}
            material={materials["pants"]}
            skeleton={(nodes.pants as THREE.SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="shirt"
            geometry={(nodes.shirt as THREE.SkinnedMesh).geometry}
            material={materials["shirt"]}
            skeleton={(nodes.shirt as THREE.SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="shoes"
            geometry={(nodes.shoes as THREE.SkinnedMesh).geometry}
            material={materials["Shoes"]}
            skeleton={(nodes.shoes as THREE.SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="Tongue"
            geometry={(nodes.Tongue as THREE.SkinnedMesh).geometry}
            material={materials["tongue"]}
            skeleton={(nodes.Tongue as THREE.SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="Upper_Lessa"
            geometry={(nodes.Upper_Lessa as THREE.SkinnedMesh).geometry}
            material={materials["lessa"]}
            skeleton={(nodes.Upper_Lessa as THREE.SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="Upper_Teeth"
            geometry={(nodes.Upper_Teeth as THREE.SkinnedMesh).geometry}
            material={materials["teeth"]}
            skeleton={(nodes.Upper_Teeth as THREE.SkinnedMesh).skeleton}
          />
          <primitive object={nodes.rootx} />
          <primitive object={nodes.c_eye_targetx} />
        </group>
      </group>
    </group>
  );
}
export const MemoPhill = React.memo(phill);
useGLTF.preload("/phill.glb");
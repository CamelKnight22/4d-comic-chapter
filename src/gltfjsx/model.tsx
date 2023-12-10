
import * as THREE from "three";
import { useEffect, useMemo, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useGraph } from "@react-three/fiber";
import { SkeletonUtils } from "three/examples/jsm/Addons.js";
import React from "react";

type GLTFResult = GLTF & {
  nodes: {
    arm: THREE.SkinnedMesh;
    face: THREE.SkinnedMesh;
    hand: THREE.SkinnedMesh;
    hoodie: THREE.SkinnedMesh;
    rope: THREE.SkinnedMesh;
    skull_bot: THREE.SkinnedMesh;
    skull_top: THREE.SkinnedMesh;
    spine: THREE.SkinnedMesh;
    Cube: THREE.Mesh;
    Cylinder: THREE.Mesh;
    rootx: THREE.Bone;
    c_hand_ikl002: THREE.Bone;
  };
  materials: {
    ["White face"]: THREE.MeshStandardMaterial;
    ["Black Face"]: THREE.MeshStandardMaterial;
    ["Rope Mat"]: THREE.MeshStandardMaterial;
    ["Metal Scyth"]: THREE.MeshStandardMaterial;
    ["Black Scyth"]: THREE.MeshStandardMaterial;
  };

  animations: GLTFAction[];
};

type ActionName = "Attack" | "Idle" | "Move";
interface GLTFAction extends THREE.AnimationClip {
    name: ActionName;}

    export function Model(props: JSX.IntrinsicElements["group"] & { animation: ActionName }) {
      const group = useRef<THREE.Group>(null);
      const original = useGLTF("/Model.glb") as GLTFResult;
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
            name="arm"
            geometry={(nodes.arm as THREE.SkinnedMesh).geometry}
            material={materials["White face"]}
            skeleton={(nodes.arm as THREE.SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="face"
            geometry={(nodes.face as THREE.SkinnedMesh).geometry}
            material={materials["Black Face"]}
            skeleton={(nodes.face as THREE.SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="hand"
            geometry={(nodes.hand as THREE.SkinnedMesh).geometry}
            material={materials["White face"]}
            skeleton={(nodes.hand as THREE.SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="hoodie"
            geometry={(nodes.hoodie as THREE.SkinnedMesh).geometry}
            material={materials["Rope Mat"]}
            skeleton={(nodes.hoodie as THREE.SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="rope"
            geometry={(nodes.rope as THREE.SkinnedMesh).geometry}
            material={materials["Rope Mat"]}
            skeleton={(nodes.rope as THREE.SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="skull_bot"
            geometry={(nodes.skull_bot as THREE.SkinnedMesh).geometry}
            material={materials["White face"]}
            skeleton={(nodes.skull_bot as THREE.SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="skull_top"
            geometry={(nodes.skull_top as THREE.SkinnedMesh).geometry}
            material={materials["White face"]}
            skeleton={(nodes.skull_top as THREE.SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="spine"
            geometry={(nodes.spine as THREE.SkinnedMesh).geometry}
            material={materials["White face"]}
            skeleton={(nodes.spine as THREE.SkinnedMesh).skeleton}
          />
          <primitive object={nodes.rootx} />
          <primitive object={nodes.c_hand_ikl002} />
        </group>
      </group>
    </group>
  );
}
export const MemoizedModel = React.memo(Model);
useGLTF.preload("/Model.glb");
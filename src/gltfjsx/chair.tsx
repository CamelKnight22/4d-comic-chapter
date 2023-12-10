
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube001: THREE.Mesh;
    Cube002: THREE.Mesh;
  };
  materials: {
    wood: THREE.MeshStandardMaterial;
  };
};

export function Chair(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/chair.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials.wood}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials.wood}
      />
    </group>
  );
}

useGLTF.preload("/chair.glb");

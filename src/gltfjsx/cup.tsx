import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cylinder001: THREE.Mesh;
    Cylinder002: THREE.Mesh;
  };
  materials: {
    ["cup 1"]: THREE.MeshStandardMaterial;
    ["cup 2"]: THREE.MeshStandardMaterial;
  };
};

export function cup(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/cup.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials["cup 1"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials["cup 2"]}
      />
    </group>
  );
}

useGLTF.preload("/cup.glb");

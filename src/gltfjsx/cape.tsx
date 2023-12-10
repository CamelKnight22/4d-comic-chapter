import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cape: THREE.Mesh;
  };
  materials: {
    Cape: THREE.MeshStandardMaterial;
  };
};

export function Cape(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/cape.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cape.geometry}
        material={materials.Cape}
      />
    </group>
  );
}

useGLTF.preload("/cape.glb");

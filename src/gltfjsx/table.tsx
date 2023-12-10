import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cylinder: THREE.Mesh;
    Cube: THREE.Mesh;
  };
  materials: {
    wood: THREE.MeshStandardMaterial;
  };
};

export function Table(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/table.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.wood}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.wood}
      />
    </group>
  );
}

useGLTF.preload("/table.glb");

// PUBLIC_INTERFACE
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './VirtuCubeMainContainer.css';

/**
 * A simple cube component that serves as a placeholder for the Rubik's cube
 */
const SimpleCube = () => {
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

/**
 * VirtuCubeMainContainer - The main container component for VirtuCube
 * This component provides the container for displaying an interactive 3D Rubik's Cube
 * using React Three Fiber.
 */
const VirtuCubeMainContainer = () => {
  return (
    <div className="virtucube-container">
      <div className="virtucube-header">
        <h1 className="virtucube-title">VirtuCube</h1>
        <p className="virtucube-subtitle">Interactive 3D Rubik's Cube</p>
      </div>
      
      <div className="virtucube-cube-container">
        {/* 3D Canvas for the Rubik's cube */}
        <div className="virtucube-canvas-wrapper">
          <Canvas 
            camera={{ position: [3, 3, 5], fov: 50 }}
            style={{ 
              width: '100%', 
              height: '100%'
            }}
          >
            <ambientLight intensity={0.5} />
            <spotLight 
              position={[10, 10, 10]} 
              angle={0.15} 
              penumbra={1} 
              intensity={1} 
              castShadow 
            />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            
            <SimpleCube />
            
            {/* OrbitControls allows the user to rotate the view */}
            <OrbitControls />
          </Canvas>
        </div>
      </div>
      
      <div className="virtucube-controls-placeholder">
        <p>Use your mouse to rotate the cube. More controls coming soon!</p>
      </div>
    </div>
  );
};

export default VirtuCubeMainContainer;

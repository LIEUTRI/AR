import React from 'react'
import {
    Viro3DObject,
    ViroNode,
} from 'react-viro';
import {
    Alert,
} from 'react-native'
// import Toast from 'react-native-simple-toast'

export default function CartoonGirl () {

    const onRotation = (rotationState, rotationFactor, source) => {
        console.log('[cartoongirl] onRotation: state: ', rotationState);
        // Toast.show(rotationState, Toast.SHORT)
    }

    React.useEffect(() => {
        Alert.alert('TEST...')
        console.log('[cartoongirl] test');
    }, [])

    return (
        <>
            <ViroNode position={[0, -1, -1]} dragType="FixedToPlane" onDrag={() => { 
                // Toast.show('draging...', Toast.SHORT) 
            }}
                dragPlane={{
                    planePoint: [0, -1, 0],
                    planeNormal: [0, 1, 0],
                    maxDistance: 3
                }}
                onRotation={onRotation}
            >
                <Viro3DObject
                    source={require('../res/cartoongirl/cartoongirl.vrx')}
                    resources={[require('../res/cartoongirl/Material.004_Base_Color.jpg'),
                    require('../res/cartoongirl/Material.004_Height.jpg'),
                    require('../res/cartoongirl/Material.004_Metallic.jpg'),
                    require('../res/cartoongirl/Material.004_Metallic.jpg'),
                    require('../res/cartoongirl/Material.004_Normal.jpg'),
                    require('../res/cartoongirl/Material.004_Roughness.jpg'),
                    require('../res/cartoongirl/Material.005_Base_Color.jpg'),
                    require('../res/cartoongirl/Material.005_Height.jpg'),
                    require('../res/cartoongirl/Material.005_Metallic.jpg'),
                    require('../res/cartoongirl/Material.005_Normal_OpenGL.jpg'),
                    require('../res/cartoongirl/Material.005_Normal.jpg'),
                    require('../res/cartoongirl/Material.005_Roughness.jpg')
                    ]}
                    position={[0, .4, 0]}
                    scale={[.1, .1, .1]}
                    type="VRX" />
            </ViroNode>
        </>
    )
}
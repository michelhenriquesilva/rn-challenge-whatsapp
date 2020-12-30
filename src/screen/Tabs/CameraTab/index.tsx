import CameraRoll from '@react-native-community/cameraroll';
import React, { useState } from 'react';
import { PermissionsAndroid } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/Feather';
import {
    CameraActionContent, CameraActions, CameraMediaDeviceContainer,
    CameraMediaDeviceItem, CameraMediaWrapper, CameraPreview,





    FlashButton,

    ReverseCameraButton, TakePictureButton
} from './styles';

export default function CameraTab(){
    let camera: RNCamera | null; 
    
    const [photosGallery, setPhotosGallery] = useState<any[]>([]); 
    const [cameraType, setCameraType] = useState<"front" | "back">("front");
    const [flashMode, setFlashMode] = useState<"off" | "auto">("off");

    async function hasPermission(){
        try {
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE)
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {   
                return true;  
            } else {
                console.warn("Photos permission denied");
                return false;
            }
        } catch (err) {
            console.error(err)
            return false;
        }
    }

    function getPhotosGallery(){                
        if(hasPermission()){
            
            CameraRoll.getPhotos({
                first: 10,
                groupName: 'Screenshots',
                assetType: 'Photos',
            })
            .then(data => {
                setPhotosGallery(data.edges);
            })
        }
    }

    async function takePicture(){
        if (camera) {
            const options = { quality: 0.5, base64: true };
            const data = await camera.takePictureAsync(options);
            console.log(data.uri);
        }
    };

    function toggleCameraType(){
        const type = (cameraType == 'front') ? 'back' : 'front' ;
        setCameraType(type);
    }

    function toggleFlashMode(){
        const isFlash = (flashMode == 'off') ? 'auto' : 'off' ;
        setFlashMode(isFlash);
    }

    return (
        <CameraPreview 
            type={cameraType}
            flashMode={flashMode}
            ref={ref => (camera = ref)}
        >                
            <CameraMediaWrapper>           
                <CameraMediaDeviceContainer
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={photosGallery}
                    keyExtractor={(item: any) => item.node.image.uri}
                    renderItem={({item}: any) => (
                        <CameraMediaDeviceItem key={item.id} source={{uri: item.node.image.uri}} resizeMode="cover"/>
                    )}
                />
                <CameraActions>
                    <CameraActionContent>
                        <FlashButton onPress={() => toggleFlashMode()}>
                            <Icon name={(flashMode == 'off') ? 'zap-off' : 'zap'} color="#fff" size={24} />
                        </FlashButton>
                    </CameraActionContent>
                    <CameraActionContent>
                        <TakePictureButton onPress={() => takePicture()} />
                    </CameraActionContent>
                    <CameraActionContent>
                        <ReverseCameraButton onPress={() => toggleCameraType()}>
                            <Icon name={(cameraType == 'front') ? 'camera-off' : 'camera'} color="#fff" size={24} />
                        </ReverseCameraButton>
                    </CameraActionContent>                                            
                </CameraActions>
            </CameraMediaWrapper>
        </CameraPreview>
    );
}
import { RNCamera } from 'react-native-camera';
import styled from 'styled-components/native';

export const CameraPreview = styled(RNCamera)`
    justify-content: center;
    align-items: center;
    flex: 1;
    background-color: #fff;
`;

export const CameraMediaWrapper = styled.View`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
`;

export const CameraMediaDeviceContainer = styled.FlatList`
    flex-direction: row;
    width: 100%;
    height: 70px;    
`;
export const CameraMediaDeviceItem = styled.Image`
    width: 72px;
    height: 70px;
    margin-right: 5px;
    background-color: rgba(255,255,255,0.2)
`;

export const CameraActions = styled.View`
    padding: 20px 0;
    width: 100%;
    flex-direction: row;
    align-items: center;  
    justify-content: space-between;
`;

export const CameraActionContent = styled.View`    
    width: 30%;
    align-items: center;  
    justify-content: center;
`;

export const FlashButton = styled.TouchableOpacity`
    justify-content: center;
    
`;
export const TakePictureButton = styled.TouchableOpacity`
    border: 3px solid white;
    justify-content: center;
    border-radius: 100px;
    height: 85px;
    width: 85px;
`;
export const ReverseCameraButton = styled.TouchableOpacity`
    justify-content: center;
`;
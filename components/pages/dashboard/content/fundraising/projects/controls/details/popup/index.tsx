import React from 'react'
import {StyledPopup} from './styles';

export const LoadingPopup = () => {
    return <StyledPopup open={true} closeOnDocumentClick={false} closeOnEscape={false}><h4>Loading...</h4></StyledPopup>
}
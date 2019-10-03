import React from 'react';
import styled from 'styled-components';

export const CustomPopupComponent = styled.div`
  padding: 8px 16px;
  background-color: aliceblue;
  position: absolute;
  border: 1px solid #ccc;
  border-radius: 4px;

  p, pre {
    font-size: 16px;
  }

  pre {
    font-weight: 700;
  }
`
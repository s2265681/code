import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import  Button from './button'
import { addDecorator } from '@storybook/react';
import {withInfo} from '@storybook/addon-info';

const defaultButton =()=>(
    <Button onClick={action('clicked')}> default button </Button>
)

const ButtonWithSize =()=>(
    <>
    <Button size="lg"> large button </Button>
    <Button size="sm"> small button </Button>
    </>
)

const ButtonWithType =()=>(
    <>
    <Button btnType="primary">primary button</Button>
    <Button btnType="dashed">dashed button</Button>
    <Button btnType="default">default button</Button>
    <Button btnType="danger">danger button</Button>
    </>
)
storiesOf('Button Component',module)
.addDecorator(withInfo)
.addParameters({
    info:{
        text:`this is very nice component`,
        inline:true
    }
})
.add('默认 Button',defaultButton)
.add('不同尺寸的Button',ButtonWithSize)
.add('不同类型的Button',ButtonWithType)

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Alert, { AlertType } from "./alert";

const MAlert =()=>(
  <div className="block alerts">
          <Alert type={AlertType.Success} message="Alert Success" />
          <Alert type={AlertType.Error} message="Alert Error" />
          <Alert type={AlertType.Info} message="Alert Info" />
          <Alert type={AlertType.Warning} message="Alert Warning" />
        </div>
)


storiesOf('Alert Component',module)
.add('MAlert',MAlert)

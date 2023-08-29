import React from 'react';
import { FlexPlugin } from '@twilio/flex-plugin';
import Sample from './components/CustomTaskList/Sample';

const PLUGIN_NAME = 'Usecase5Plugin';

export default class Usecase5Plugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   */
  async init(flex, manager) {
    const options = { sortOrder: -1 };
    flex.AgentDesktopView.Panel2.Content.replace(<Sample key="SamplePlugin-component2" />, options);
  }
}





import React from 'react';

import { FlexPlugin } from '@twilio/flex-plugin';

 

import CustomTaskList from './components/CustomTaskList/CustomTaskList';

 

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

 

  init(flex, manager) {

    const options = { sortOrder: -1 };

    flex.AgentDesktopView.Panel2.Content.replace(<CustomTaskList key="SamplePlugin-component2" />, options);

    flex.MainHeader.defaultProps.logoUrl = "https://images.ctfassets.net/h6ysm004d16d/17STiwlDODZXqUqkfBGXqc/0cb10c053987f043d8372f9f27485362/header.png";

    manager.updateConfig({

      theme: {

        overrides: {

          MainHeader: {

            Container: {

                background: "#EE2722",

                color: "#ffffff"

            }

          },

          SideNav: {

            Container: {

              background: "#000000",

            },

            Button: {

              color: "#ffffff",

            },

            Icon: {

              color: "#ffffff",

            },

          },

          CallCanvas: {

            Button: {

              background: "#ffffff",

              color: "#EE2722",

            },

            HangUpButton: {

              background: "#EE2722",

              color: "#ffffff"

            }

          },

          TaskList: {

            Item: {

              Container: {

                background: "#ffffff",

                color: "#EE2722",

                lightColor: "#ffffff",

                darkColor: "#EE2722",

              },

              SelectedContainer: {

                background: "#ffffff",

                color: "#EE2722",

              },

              SelectedIcon: {

                color : "#EE2722"

              },

              Icon:{

                color : "#EE2722"

              }

            },

            Filter : {

              Menu: {

                Item:{

                  color: "#000000",

                }

              },

              EntryButton: {

                color: "#EE2722",

              }

            }

          },

          TaskDetailsPanel: {

            Container: {

              color: "#EE2722",

            },

            IconContainer: {

              color: "#EE2722",

            },

            SecondLine: {

              color: "#EE2722",

            }

          },

          TaskInfoPanel:{

            Container: {

              color: "#EE2722",

            }

          },

          Chat: {

            WelcomeMessage: {

              Container: {

                color: "#EE2722",

              },

              Icon: {

                color: "#EE2722",

              }

            },

            MessageListItem: {

              FromMe: {

                Bubble: {

                  background: "#000000",

                  color: "#ffffff",

                }

              },

              FromOthers: {

                Bubble: {

                  background: "#EE2722",

                  color: "#ffffff",

                },

                Avatar: {

                  color: "#EE2722",

                },

                Header: {

                  color: "#ffffff",

                }

              }

            },

            MessageInput: {

              Button: {

                background: "#EE2722",

                color: "#ffffff",

                borderColor: "#EE2722",

              },

              Container: {

                color: "#ffffff",

                background: "#000000",

              }

            }

          }

        },

      },

    });

  }

}
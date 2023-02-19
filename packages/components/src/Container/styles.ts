import { ThemeProps, BreakpointKey } from '../../../core/src';
import { CONTAINER_SCOPE_NAME, CONTAINER_FLUID_CLASSNAME } from './const';

const getContainerStyles = (theme: ThemeProps) => {
    const CONTAINER_XS_CLASSNAME = `${CONTAINER_SCOPE_NAME}--${BreakpointKey.xs}`;
    const CONTAINER_SM_CLASSNAME = `${CONTAINER_SCOPE_NAME}--${BreakpointKey.sm}`;
    const CONTAINER_MD_CLASSNAME = `${CONTAINER_SCOPE_NAME}--${BreakpointKey.md}`;
    const CONTAINER_LG_CLASSNAME = `${CONTAINER_SCOPE_NAME}--${BreakpointKey.lg}`;
    const CONTAINER_XL_CLASSNAME = `${CONTAINER_SCOPE_NAME}--${BreakpointKey.xl}`;
    const CONTAINER_XXL_CLASSNAME = `${CONTAINER_SCOPE_NAME}--${BreakpointKey.xxl}`;

    return `
            .${CONTAINER_SCOPE_NAME} {
                width: 100%;
                margin-inline: auto;
                padding-inline: .5rem;
            }
            
            @media (max-width: ${(theme.breakpoint.sm - 1)}px) {
                .${CONTAINER_XS_CLASSNAME}, 
                .${CONTAINER_SM_CLASSNAME}, 
                .${CONTAINER_MD_CLASSNAME}, 
                .${CONTAINER_LG_CLASSNAME}, 
                .${CONTAINER_XL_CLASSNAME},
                .${CONTAINER_XXL_CLASSNAME} {
                    max-width: ${theme.container.xs};
                }                                              
            }
            
            @media (min-width: ${theme.breakpoint.sm}px) {
                .${CONTAINER_XS_CLASSNAME} {
                    max-width: ${theme.container.xs};
                }
                .${CONTAINER_SM_CLASSNAME} {
                    max-width: ${theme.container.sm};
                }
                .${CONTAINER_MD_CLASSNAME},
                .${CONTAINER_LG_CLASSNAME},
                .${CONTAINER_XL_CLASSNAME},
                .${CONTAINER_XXL_CLASSNAME} {
                    max-width: ${theme.container.xs};
                }                 
            }
            
            @media (min-width: ${theme.breakpoint.md}px) {
                .${CONTAINER_XS_CLASSNAME} {
                    max-width: ${theme.container.xs};
                }
                .${CONTAINER_SM_CLASSNAME} {
                    max-width: ${theme.container.sm};
                }
                .${CONTAINER_MD_CLASSNAME} {
                    max-width: ${theme.container.md};
                }
                .${CONTAINER_LG_CLASSNAME},
                .${CONTAINER_XL_CLASSNAME},
                .${CONTAINER_XXL_CLASSNAME} {
                    max-width: ${theme.container.xs};
                }                 
            }
            
            @media (min-width: ${theme.breakpoint.lg}px) {
                .${CONTAINER_XS_CLASSNAME} {
                    max-width: ${theme.container.xs};
                }
                .${CONTAINER_SM_CLASSNAME} {
                    max-width: ${theme.container.sm};
                }
                .${CONTAINER_MD_CLASSNAME} {
                    max-width: ${theme.container.md};
                }
                .${CONTAINER_LG_CLASSNAME} {
                    max-width: ${theme.container.lg};
                }                          
                .${CONTAINER_XL_CLASSNAME},
                .${CONTAINER_XXL_CLASSNAME} {
                    max-width: ${theme.container.xs};
                }                 
            }
            
            @media (min-width: ${theme.breakpoint.xl}px) {
                .${CONTAINER_XS_CLASSNAME} {
                    max-width: ${theme.container.xs};
                }
                .${CONTAINER_SM_CLASSNAME} {
                    max-width: ${theme.container.sm};
                }
                .${CONTAINER_MD_CLASSNAME} {
                    max-width: ${theme.container.md};
                }
                .${CONTAINER_LG_CLASSNAME} {
                    max-width: ${theme.container.lg};
                }                           
                .${CONTAINER_XL_CLASSNAME} {
                    max-width: ${theme.container.xl};
                }
                .${CONTAINER_XXL_CLASSNAME} {
                    max-width: ${theme.container.xs};
                }                 
            }
            
            @media (min-width: ${theme.breakpoint.xxl}px) {
                .${CONTAINER_XS_CLASSNAME} {
                    max-width: ${theme.container.xs};
                }
                .${CONTAINER_SM_CLASSNAME} {
                    max-width: ${theme.container.sm};
                }
                .${CONTAINER_MD_CLASSNAME} {
                    max-width: ${theme.container.md};
                }
                .${CONTAINER_LG_CLASSNAME} {
                    max-width: ${theme.container.lg};
                }                           
                .${CONTAINER_XL_CLASSNAME} {
                    max-width: ${theme.container.xl};
                }
                .${CONTAINER_XXL_CLASSNAME} {
                    max-width: ${theme.container.xxl};
                }                 
            }                                                            
                     
            .${CONTAINER_FLUID_CLASSNAME} {
                max-width: 100%;
            }                     
                         
        `;
};

export default getContainerStyles;

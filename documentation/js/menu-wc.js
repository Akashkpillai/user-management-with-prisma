'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">user-mangement documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CityModule.html" data-type="entity-link" >CityModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CityModule-de3875bd9d977be31b4897548b217f975774810118aee4dce587dfb1ea98aae74ebe47ee983a7c14ffa8608fbf7f4ae213371be6a724689253c69416b67a8220"' : 'data-bs-target="#xs-controllers-links-module-CityModule-de3875bd9d977be31b4897548b217f975774810118aee4dce587dfb1ea98aae74ebe47ee983a7c14ffa8608fbf7f4ae213371be6a724689253c69416b67a8220"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CityModule-de3875bd9d977be31b4897548b217f975774810118aee4dce587dfb1ea98aae74ebe47ee983a7c14ffa8608fbf7f4ae213371be6a724689253c69416b67a8220"' :
                                            'id="xs-controllers-links-module-CityModule-de3875bd9d977be31b4897548b217f975774810118aee4dce587dfb1ea98aae74ebe47ee983a7c14ffa8608fbf7f4ae213371be6a724689253c69416b67a8220"' }>
                                            <li class="link">
                                                <a href="controllers/CityController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CityController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CityModule-de3875bd9d977be31b4897548b217f975774810118aee4dce587dfb1ea98aae74ebe47ee983a7c14ffa8608fbf7f4ae213371be6a724689253c69416b67a8220"' : 'data-bs-target="#xs-injectables-links-module-CityModule-de3875bd9d977be31b4897548b217f975774810118aee4dce587dfb1ea98aae74ebe47ee983a7c14ffa8608fbf7f4ae213371be6a724689253c69416b67a8220"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CityModule-de3875bd9d977be31b4897548b217f975774810118aee4dce587dfb1ea98aae74ebe47ee983a7c14ffa8608fbf7f4ae213371be6a724689253c69416b67a8220"' :
                                        'id="xs-injectables-links-module-CityModule-de3875bd9d977be31b4897548b217f975774810118aee4dce587dfb1ea98aae74ebe47ee983a7c14ffa8608fbf7f4ae213371be6a724689253c69416b67a8220"' }>
                                        <li class="link">
                                            <a href="injectables/CityService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CityService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CountryModule.html" data-type="entity-link" >CountryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CountryModule-d17686ea95820f632b4c21699f0f4a23fcff0546c39e36ab614c121a58ca5a09862a7ee4909d2ecf7db936853c0bd6d5660a749c229bd2bf3515286626ea00dd"' : 'data-bs-target="#xs-controllers-links-module-CountryModule-d17686ea95820f632b4c21699f0f4a23fcff0546c39e36ab614c121a58ca5a09862a7ee4909d2ecf7db936853c0bd6d5660a749c229bd2bf3515286626ea00dd"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CountryModule-d17686ea95820f632b4c21699f0f4a23fcff0546c39e36ab614c121a58ca5a09862a7ee4909d2ecf7db936853c0bd6d5660a749c229bd2bf3515286626ea00dd"' :
                                            'id="xs-controllers-links-module-CountryModule-d17686ea95820f632b4c21699f0f4a23fcff0546c39e36ab614c121a58ca5a09862a7ee4909d2ecf7db936853c0bd6d5660a749c229bd2bf3515286626ea00dd"' }>
                                            <li class="link">
                                                <a href="controllers/CountryController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CountryController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CountryModule-d17686ea95820f632b4c21699f0f4a23fcff0546c39e36ab614c121a58ca5a09862a7ee4909d2ecf7db936853c0bd6d5660a749c229bd2bf3515286626ea00dd"' : 'data-bs-target="#xs-injectables-links-module-CountryModule-d17686ea95820f632b4c21699f0f4a23fcff0546c39e36ab614c121a58ca5a09862a7ee4909d2ecf7db936853c0bd6d5660a749c229bd2bf3515286626ea00dd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CountryModule-d17686ea95820f632b4c21699f0f4a23fcff0546c39e36ab614c121a58ca5a09862a7ee4909d2ecf7db936853c0bd6d5660a749c229bd2bf3515286626ea00dd"' :
                                        'id="xs-injectables-links-module-CountryModule-d17686ea95820f632b4c21699f0f4a23fcff0546c39e36ab614c121a58ca5a09862a7ee4909d2ecf7db936853c0bd6d5660a749c229bd2bf3515286626ea00dd"' }>
                                        <li class="link">
                                            <a href="injectables/CountryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CountryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PrismaModule-a4263f996ba8588ccc34215c4a38cb88ff8175199ce6d229d04201851f9b00396ec7478dd075d9845249518f60d6f7be7d36e0f94bffc5f854f4a8daf3543133"' : 'data-bs-target="#xs-injectables-links-module-PrismaModule-a4263f996ba8588ccc34215c4a38cb88ff8175199ce6d229d04201851f9b00396ec7478dd075d9845249518f60d6f7be7d36e0f94bffc5f854f4a8daf3543133"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-a4263f996ba8588ccc34215c4a38cb88ff8175199ce6d229d04201851f9b00396ec7478dd075d9845249518f60d6f7be7d36e0f94bffc5f854f4a8daf3543133"' :
                                        'id="xs-injectables-links-module-PrismaModule-a4263f996ba8588ccc34215c4a38cb88ff8175199ce6d229d04201851f9b00396ec7478dd075d9845249518f60d6f7be7d36e0f94bffc5f854f4a8daf3543133"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StateModule.html" data-type="entity-link" >StateModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-StateModule-ce7ef5ed1f674f6991f30676b712bec788ab58bdad6e2032b96e22dbd5a8da29b9a487f921a98c0762eef1701046f880fb0c1f747ee67f05bdcec8fab70b91c2"' : 'data-bs-target="#xs-controllers-links-module-StateModule-ce7ef5ed1f674f6991f30676b712bec788ab58bdad6e2032b96e22dbd5a8da29b9a487f921a98c0762eef1701046f880fb0c1f747ee67f05bdcec8fab70b91c2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-StateModule-ce7ef5ed1f674f6991f30676b712bec788ab58bdad6e2032b96e22dbd5a8da29b9a487f921a98c0762eef1701046f880fb0c1f747ee67f05bdcec8fab70b91c2"' :
                                            'id="xs-controllers-links-module-StateModule-ce7ef5ed1f674f6991f30676b712bec788ab58bdad6e2032b96e22dbd5a8da29b9a487f921a98c0762eef1701046f880fb0c1f747ee67f05bdcec8fab70b91c2"' }>
                                            <li class="link">
                                                <a href="controllers/StateController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StateController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-StateModule-ce7ef5ed1f674f6991f30676b712bec788ab58bdad6e2032b96e22dbd5a8da29b9a487f921a98c0762eef1701046f880fb0c1f747ee67f05bdcec8fab70b91c2"' : 'data-bs-target="#xs-injectables-links-module-StateModule-ce7ef5ed1f674f6991f30676b712bec788ab58bdad6e2032b96e22dbd5a8da29b9a487f921a98c0762eef1701046f880fb0c1f747ee67f05bdcec8fab70b91c2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StateModule-ce7ef5ed1f674f6991f30676b712bec788ab58bdad6e2032b96e22dbd5a8da29b9a487f921a98c0762eef1701046f880fb0c1f747ee67f05bdcec8fab70b91c2"' :
                                        'id="xs-injectables-links-module-StateModule-ce7ef5ed1f674f6991f30676b712bec788ab58bdad6e2032b96e22dbd5a8da29b9a487f921a98c0762eef1701046f880fb0c1f747ee67f05bdcec8fab70b91c2"' }>
                                        <li class="link">
                                            <a href="injectables/StateService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StateService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-32e40ee452d0509b010a04ef37874f1a6876cc5de73e5753bd14aa1984be935fe39a6002777752690b30c4301a31f04fda1b5bae61ba277d968649cfe7fa3e50"' : 'data-bs-target="#xs-controllers-links-module-UserModule-32e40ee452d0509b010a04ef37874f1a6876cc5de73e5753bd14aa1984be935fe39a6002777752690b30c4301a31f04fda1b5bae61ba277d968649cfe7fa3e50"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-32e40ee452d0509b010a04ef37874f1a6876cc5de73e5753bd14aa1984be935fe39a6002777752690b30c4301a31f04fda1b5bae61ba277d968649cfe7fa3e50"' :
                                            'id="xs-controllers-links-module-UserModule-32e40ee452d0509b010a04ef37874f1a6876cc5de73e5753bd14aa1984be935fe39a6002777752690b30c4301a31f04fda1b5bae61ba277d968649cfe7fa3e50"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-32e40ee452d0509b010a04ef37874f1a6876cc5de73e5753bd14aa1984be935fe39a6002777752690b30c4301a31f04fda1b5bae61ba277d968649cfe7fa3e50"' : 'data-bs-target="#xs-injectables-links-module-UserModule-32e40ee452d0509b010a04ef37874f1a6876cc5de73e5753bd14aa1984be935fe39a6002777752690b30c4301a31f04fda1b5bae61ba277d968649cfe7fa3e50"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-32e40ee452d0509b010a04ef37874f1a6876cc5de73e5753bd14aa1984be935fe39a6002777752690b30c4301a31f04fda1b5bae61ba277d968649cfe7fa3e50"' :
                                        'id="xs-injectables-links-module-UserModule-32e40ee452d0509b010a04ef37874f1a6876cc5de73e5753bd14aa1984be935fe39a6002777752690b30c4301a31f04fda1b5bae61ba277d968649cfe7fa3e50"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/CityController.html" data-type="entity-link" >CityController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CountryController.html" data-type="entity-link" >CountryController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/StateController.html" data-type="entity-link" >StateController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/cityDto.html" data-type="entity-link" >cityDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/countryDto.html" data-type="entity-link" >countryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpExceptionFilter.html" data-type="entity-link" >HttpExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResponseInterceptor.html" data-type="entity-link" >ResponseInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="classes/StateDto.html" data-type="entity-link" >StateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CityService.html" data-type="entity-link" >CityService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CountryService.html" data-type="entity-link" >CountryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SanitizeUserInterceptor.html" data-type="entity-link" >SanitizeUserInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StateService.html" data-type="entity-link" >StateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthorizationGuard.html" data-type="entity-link" >AuthorizationGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
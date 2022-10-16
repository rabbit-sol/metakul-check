import React from "react";
import './TeamMembers.css'

import Nft1 from "../../assets/nft/nft1.png";
import Ak from "../../assets/teamMembers/ak.png";
import Instagram from "../../assets/icon/instagram.png";
import LinedIn from "../../assets/icon/linkedIn.png";


const TeamMemberData = [
    { img: Ak, name: "Shubham Kunwar", instaGram: "https://discord.gg/sRk3tZ9z3A", linkedIn: "", id: 1,role:"Blockchain developer" },
    { img: Ak, name: "Shubham Kunwar", instaGram: "https://discord.gg/sRk3tZ9z3A", linkedIn: "", id: 1,role:"Blockchain developer" },
    { img: Ak, name: "Narendra Rauthan", instaGram: "", linkedIn: "", id: 2, role: "UI/UX Designer" },
   
    
];

export default function TeamMember() {
    return (
        <div className={""} id="kul-team">
            
            <section class="elementor-section elementor-top-section elementor-element elementor-element-11533d0 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="11533d0" data-element_type="section" data-settings="{&quot;background_motion_fx_translateY_effect&quot;:&quot;yes&quot;,&quot;background_motion_fx_translateY_speed&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:4,&quot;sizes&quot;:[]},&quot;background_motion_fx_translateY_affectedRange&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:{&quot;start&quot;:0,&quot;end&quot;:100}},&quot;background_motion_fx_devices&quot;:[&quot;desktop&quot;,&quot;tablet&quot;,&quot;mobile&quot;]}">
                <div class="elementor-container elementor-column-gap-default">
                    <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c7cc134" data-id="c7cc134" data-element_type="column">
                        <div class="elementor-widget-wrap elementor-element-populated">
                            <div class="elementor-element elementor-element-1c0bd3d elementor-widget elementor-widget-heading" data-id="1c0bd3d" data-element_type="widget" data-widget_type="heading.default">
                                <div class="elementor-widget-container">
                                    <h2 class="elementor-heading-title elementor-size-default">
                                        Meet Our Team
                                    </h2>
                                </div>
                            </div>
                            <div class="elementor-element elementor-element-a3361da elementor-widget elementor-widget-text-editor" data-id="a3361da" data-element_type="widget" data-widget_type="text-editor.default">
                                <div class="elementor-widget-container">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                </div>
                            </div>
                            <section class="elementor-section elementor-inner-section elementor-element elementor-element-9cf208d elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="9cf208d" data-element_type="section">
                                <div class="elementor-container elementor-column-gap-default">
                                    <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-7ba398c" data-id="7ba398c" data-element_type="column">
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                            <div class="elementor-element elementor-element-4986216 elementor-widget elementor-widget-image" data-id="4986216" data-element_type="widget" data-widget_type="image.default">
                                                <div class="elementor-widget-container">
                                                    <img width="800" height="800" src="https://kit.spaceit.agency/metraverse/wp-content/uploads/sites/2/2022/02/21004056-1024x1024.png" class="attachment-large size-large" alt="" loading="lazy" srcset="https://kit.spaceit.agency/metraverse/wp-content/uploads/sites/2/2022/02/21004056-1024x1024.png 1024w, https://kit.spaceit.agency/metraverse/wp-content/uploads/sites/2/2022/02/21004056-300x300.png 300w, https://kit.spaceit.agency/metraverse/wp-content/uploads/sites/2/2022/02/21004056-150x150.png 150w, https://kit.spaceit.agency/metraverse/wp-content/uploads/sites/2/2022/02/21004056-768x768.png 768w, https://kit.spaceit.agency/metraverse/wp-content/uploads/sites/2/2022/02/21004056-1536x1536.png 1536w, https://kit.spaceit.agency/metraverse/wp-content/uploads/sites/2/2022/02/21004056-800x800.png 800w, https://kit.spaceit.agency/metraverse/wp-content/uploads/sites/2/2022/02/21004056.png 2000w" sizes="(max-width: 800px) 100vw, 800px"/>
                                            </div>
                                                </div>
                                                <div class="elementor-element elementor-element-b04ffd3 elementor-widget elementor-widget-heading" data-id="b04ffd3" data-element_type="widget" data-widget_type="heading.default">
                                                    <div class="elementor-widget-container">
                                                        <h3 class="elementor-heading-title elementor-size-default">Larry John</h3>
                                                    </div>
                                                </div>
                                                <div class="elementor-element elementor-element-4eb66cb e-grid-align-mobile-center elementor-shape-rounded elementor-grid-0 e-grid-align-center elementor-widget elementor-widget-social-icons" data-id="4eb66cb" data-element_type="widget" data-widget_type="social-icons.default">
                                                    <div class="elementor-widget-container">
                                                        <div class="elementor-social-icons-wrapper elementor-grid">
                                                            <span class="elementor-grid-item">
                                                                <a class="elementor-icon elementor-social-icon elementor-social-icon-facebook elementor-animation-grow elementor-repeater-item-dee1a46" target="_blank">
                                                                    <span class="elementor-screen-only">Facebook</span>
                                                                    <i class="fab fa-facebook"></i>
                                                                </a>
                                                            </span>
                                                            <span class="elementor-grid-item">
                                                                <a class="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-animation-grow elementor-repeater-item-c443bca" target="_blank">
                                                                    <span class="elementor-screen-only">Twitter</span>
                                                                    <i class="fab fa-twitter"></i>
                                                                </a>
                                                            </span>
                                                            <span class="elementor-grid-item">
                                                                <a class="elementor-icon elementor-social-icon elementor-social-icon-youtube elementor-animation-grow elementor-repeater-item-97f9011" target="_blank">
                                                                    <span class="elementor-screen-only">Youtube</span>
                                                                    <i class="fab fa-youtube"></i>
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-d3df844" data-id="d3df844" data-element_type="column">
                                            <div class="elementor-widget-wrap elementor-element-populated">
                                                <div class="elementor-element elementor-element-84f1ee2 elementor-widget elementor-widget-image" data-id="84f1ee2" data-element_type="widget" data-widget_type="image.default">
                                                    <div class="elementor-widget-container">
                                                        <img width="800" height="800" src="https://kit.spaceit.agency/metraverse/wp-content/uploads/sites/2/2022/02/2210-1024x1024.png" class="attachment-large size-large" alt="" loading="lazy" srcset="https://kit.spaceit.agency/metraverse/wp-content/uploads/sites/2/2022/02/2210-1024x1024.png 1024w, https://kit.spaceit.agency/metraverse/wp-content/uploads/sites/2/2022/02/2210-300x300.png 300w, https://kit.spaceit.agency/metraverse/wp-content/uploads/sites/2/2022/02/2210-150x150.png 150w, https://kit.spaceit.agency/metraverse/wp-content/uploads/sites/2/2022/02/2210-768x768.png 768w, https://kit.spaceit.agency/metraverse/wp-content/uploads/sites/2/2022/02/2210-1536x1536.png 1536w, https://kit.spaceit.agency/metraverse/wp-content/uploads/sites/2/2022/02/2210-800x800.png 800w, https://kit.spaceit.agency/metraverse/wp-content/uploads/sites/2/2022/02/2210.png 2000w" sizes="(max-width: 800px) 100vw, 800px"/>
                                            </div>
                                                    </div>
                                                    <div class="elementor-element elementor-element-5723490 elementor-widget elementor-widget-heading" data-id="5723490" data-element_type="widget" data-widget_type="heading.default">
                                                        <div class="elementor-widget-container">
                                                            <h3 class="elementor-heading-title elementor-size-default">Leslie Richard</h3>
                                                        </div>
                                                    </div>
                                                    <div class="elementor-element elementor-element-c350d1e e-grid-align-mobile-center elementor-shape-rounded elementor-grid-0 e-grid-align-center elementor-widget elementor-widget-social-icons" data-id="c350d1e" data-element_type="widget" data-widget_type="social-icons.default">
                                                        <div class="elementor-widget-container">
                                                            <div class="elementor-social-icons-wrapper elementor-grid">
                                                                <span class="elementor-grid-item">
                                                                    <a class="elementor-icon elementor-social-icon elementor-social-icon-facebook elementor-animation-grow elementor-repeater-item-dee1a46" target="_blank">
                                                                        <span class="elementor-screen-only">Facebook</span>
                                                                        <i class="fab fa-facebook"></i>
                                                                    </a>
                                                                </span>
                                                                <span class="elementor-grid-item">
                                                                    <a class="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-animation-grow elementor-repeater-item-c443bca" target="_blank">
                                                                        <span class="elementor-screen-only">Twitter</span>
                                                                        <i class="fab fa-twitter"></i>
                                                                    </a>
                                                                </span>
                                                                <span class="elementor-grid-item">
                                                                    <a class="elementor-icon elementor-social-icon elementor-social-icon-youtube elementor-animation-grow elementor-repeater-item-97f9011" target="_blank">
                                                                        <span class="elementor-screen-only">Youtube</span>
                                                                        <i class="fab fa-youtube"></i>
                                                                    </a>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-894cc2d" data-id="894cc2d" data-element_type="column">
                                                <div class="elementor-widget-wrap elementor-element-populated">
                                                    <div class="elementor-element elementor-element-c0838a5 elementor-widget elementor-widget-image" data-id="c0838a5" data-element_type="widget" data-widget_type="image.default">
                                                        <div class="elementor-widget-container">
                                                            <img width="800" height="800" src="https://kit.spaceit.agency/metraverse/wp-content/uploads/sites/2/2022/02/4600_1_08-1024x1024.png" class="attachment-large size-large" alt="" loading="lazy" srcset="https://kit.spaceit.agency/metraverse/wp-content/uploads/sites/2/2022/02/4600_1_08-1024x1024.png 1024w, https://kit.spaceit.agency/metraverse/wp-content/uploads/sites/2/2022/02/4600_1_08-300x300.png 300w, https://kit.spaceit.agency/metraverse/wp-content/uploads/sites/2/2022/02/4600_1_08-150x150.png 150w, https://kit.spaceit.agency/metraverse/wp-content/uploads/sites/2/2022/02/4600_1_08-768x768.png 768w, https://kit.spaceit.agency/metraverse/wp-content/uploads/sites/2/2022/02/4600_1_08-1536x1536.png 1536w, https://kit.spaceit.agency/metraverse/wp-content/uploads/sites/2/2022/02/4600_1_08-800x800.png 800w, https://kit.spaceit.agency/metraverse/wp-content/uploads/sites/2/2022/02/4600_1_08.png 2000w" sizes="(max-width: 800px) 100vw, 800px"/>
                                            </div>
                                                        </div>
                                                        <div class="elementor-element elementor-element-05eaf25 elementor-widget elementor-widget-heading" data-id="05eaf25" data-element_type="widget" data-widget_type="heading.default">
                                                            <div class="elementor-widget-container">
                                                                <h3 class="elementor-heading-title elementor-size-default">Lis James</h3>
                                                            </div>
                                                        </div>
                                                        <div class="elementor-element elementor-element-2a5a370 e-grid-align-mobile-center elementor-shape-rounded elementor-grid-0 e-grid-align-center elementor-widget elementor-widget-social-icons" data-id="2a5a370" data-element_type="widget" data-widget_type="social-icons.default">
                                                            <div class="elementor-widget-container">
                                                                <div class="elementor-social-icons-wrapper elementor-grid">
                                                                    <span class="elementor-grid-item">
                                                                        <a class="elementor-icon elementor-social-icon elementor-social-icon-facebook elementor-animation-grow elementor-repeater-item-dee1a46" target="_blank">
                                                                            <span class="elementor-screen-only">Facebook</span>
                                                                            <i class="fab fa-facebook"></i>
                                                                        </a>
                                                                    </span>
                                                                    <span class="elementor-grid-item">
                                                                        <a class="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-animation-grow elementor-repeater-item-c443bca" target="_blank">
                                                                            <span class="elementor-screen-only">Twitter</span>
                                                                            <i class="fab fa-twitter"></i>
                                                                        </a>
                                                                    </span>
                                                                    <span class="elementor-grid-item">
                                                                        <a class="elementor-icon elementor-social-icon elementor-social-icon-youtube elementor-animation-grow elementor-repeater-item-97f9011" target="_blank">
                                                                            <span class="elementor-screen-only">Youtube</span>
                                                                            <i class="fab fa-youtube"></i>
                                                                        </a>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                        </section>
                                    </div>
                                </div>
            </div>
        </section>

           
            
        </div>
           
    );
}

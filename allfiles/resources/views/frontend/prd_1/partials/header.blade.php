<header>
        <div class="blk_scrn ver_dn" id="ver_sc"></div>
        <div class="ver_cert ver_dn"></div>
        <div class="headercntrl">
            <div class="gl-wrapper" id="header">
                <div class="nwHdr">
                    <div class="hdlft"><a href="index.html" class="hd_logo">IndiaMART</a></div>
                    <div class="hdw hdLk">
                        <div class="srchB ch_fr">
                            <div class="hd_srch" id="hdSrh">
                                <div class="wrpd3 select-wrapper" id="drpn" style="display:none"></div>
                                <form name="searform" method="get" onsubmit="return validator(document.searform);" id="hdr_frm" action="https://dir.indiamart.com/search.mp?ss="> <input type="submit" id="btnSearch" class="hd_srBtn ch_fr" value=Search> <input placeholder="Enter product / service to search" id="search_string" name="ss" class="hd_txt ch_fr"> </form>
                            </div>
                            <div class="pstBuy ch_flt lgn1" id="pstBuy"><a href="https://my.indiamart.com/blgen/postbl?modid=IMHOME" class="ih-pbr ch_post_buy">Get Best Price</a></div>
                            <div class="fr1">
                                <ul id="cssmenu1" class="headermenu">
                                    <li class="has-sub" id="cvdSp" style="display:none"></li>
                                    <li id="lead_manager" style="display:none" class="head_Icn hdLeadMn"><span class="nme cpo hdBlk"></span></li>
                                    <li id="lead_cen" style="display:none" class="head_Icn hdLeadMn"><span class="nme cpo hdBlk"></span></li>
                                    <li id="prod_cen" style="display:none" class="head_Icn"><span class="nme cpo hdBlk"></span></li>
                                    <li id="sell-center" style="display:none"></li>
                                    <li id="help-center" style="display:none"><span class="nme help_w1"><a
                                                href="https://help.indiamart.com/"><i class="h_ic13"></i>Help</a>
                                            <ul class="heldrdwn">
                                                <p class="cur_pt">Find answers to your queries</p>
                                                <li class="help-desk hMb15 wli cpo">
                                                    <a href="https://help.indiamart.com/buyer-help/">
                                                        <span class="icn-Cart">
                                                            <i class="h_ic28 inHbg"></i>
                                                        </span>For <b class="Fnt-Wt">Buying</b></a>
                                    </li>
                                    <li class="help-desk hMb15 wli cpo">
                                        <a href="https://help.indiamart.com/seller-help/">
                                            <span class="icn-shp">
                                                            <i class="h_ic29 inHbg"></i>

                                                        </span>For <b class="Fnt-Wt">Selling</b></a>
                                    </li>
                                    <li class="help-desk hMb15 cpo">
                                        <a href="https://help.indiamart.com/user-feedback/" onclick="gaTrack('Feedback');">
                                            <span class="icn-Cart">

                                                            <i class="h_ic30 inHbg"></i></span>Share your Feedback</a>
                                    </li>
                                    <li class="help-desk hMb15 cpo">
                                        <a href="https://help.indiamart.com/complaint-registration/" onclick="gaTrack('Complaint');">
                                            <span class="icn-Cart"><i class="h_ic31 inHbg"></i>
                                                        </span>Raise a Complaint</a>
                                    </li>
                                    <li id="cccare" class="cur_pt"><span class="Vrt_t Icn_m1"><i
                                                            class="h_ic32 inHbg"></i></span>
                                        </span><span class="Dsp_ib cur_pt">Email us on<b
                                                class="Dsp_b Fnt-Wt">customercare@indiamart.com</b></span></li>
                                    <li id="cccare" class="cur_pt">
                                        <span class="icn-Cart-1"> <i class="h_ic33 inHbg"></i></span> Call us at <b class="Fnt-Wt">096-9696-9696</b></li>
                                    <li class="help-desk hMb15 cpo" id="chatwithus">
                                        <span class="icn-Cart">
                                            <i class="h_ic35 inHbg"></i></span>Chat With us</li>
                                    <li id="cccare" class="cur_pt"><span class="icn-Cart-1"> <i
                                                class="h_ic33 inHbg"></i></span> Covid-19 Helpline: <b class="Fnt-Wt">083-8383-8383</b></li>
                                </ul>
                                </span>
                                </li>
                                <li id="message-center" style="display:none"></li>
                                <li class="has-sub hgtb" id="lshead"><i class="ico-usr"></i><a class="rmv" href="https://my.indiamart.com/">Sign In</a></li>
                                </ul>
                            </div>
                            <div class="clear"> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ch_clb" id="loginstrip"></div>
        </div>
        <div id="sign_in"></div>
        <div id="bl_overlay_layer_v2"></div>
        <div id="boxes"></div>
        <div id="miclag"></div>
        <div id="blkSrn" class="hd_blkSrn"></div>
        <div id="blk_ctpup" style="display:none">
            <div id="chat_popup"></div>
        </div>
    </header>

     <!-- search product wrapper -->
     <div id="search-product-wrapper">
        <div id="search-product">

            <h3><b>Search</b> for products &amp; find <b>verified sellers</b> near you</h3>
            <div id="search-area">
                <div class="dropdown">
                    <button class="dropbtn" id="searchPlaceDP"><i class="fa fa-map-marker"></i><span
                            id="usercity"></span><i class="fa fa-angle-down pull-right"></i></button>
                    <div id="searchPlaces" class="dropdown-content">
                        <input type="text" placeholder="Search your city" id="searchPlaceInput" class="srin ui-autocomplete-input" autocomplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true" onkeyup="sugg_op()">
                        <div id="al_ind" class="bn_alop">All India</div>
                    </div>
                </div>
                <input type="text" id="search-input" placeholder="Enter product/service name" name="ss" class="ui-autocomplete-input" autocomplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true">
                <button id="searchBtn" onclick="redirectsearch()"><i class="fa fa-search"></i> Search</button>
            </div>
        </div>
    </div>
    <!-- search product wrapper -->
    <div id="mega-menu">
        <div class="container bg-white">
            <div class="row">

                <div class="col menu-item">
                    <div class="menu-item-wrapper p20">
                        <i class="hm-icn18"></i><span> Drugs & Pharma</span>
                    </div>
                    <div class="sub-menu">
                        <div class="row">
                            <div class="col-md-2">
                                <ul>
                                    <li><a href="https://dir.indiamart.com/indianexporters/medicines.html"><b>Common
                                                Disease Medicines</b></a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/pharmaceutical-tablets.html">Pharmaceutical
                                            Tablets</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/pharmaceutical-medicines.html">Pharmaceutical
                                            Medicines</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/pharmaceutical-syrup.html">Pharmaceutical
                                            Syrup</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/pharmaceutical-injectables.html">Pharmaceutical
                                            Injectables</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/pharmaceutical-capsules.html">Pharmaceutical
                                            Capsules</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/cough-syrup.html">Cough Syrup</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/pharmaceutical-ointments.html">Pharmaceutical
                                            Ointments</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/skin-ointment.html">Skin Ointment</a>
                                    </li>
                                    <li><a href="https://dir.indiamart.com/impcat/injectable-products.html">Injectable
                                            Products</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/eye-drops.html">Eye Drops</a></li>
                                    <li class="view-more"><a href="https://dir.indiamart.com/indianexporters/medicines.html">View
                                            More</a></li>
                                </ul>
                            </div>
                            <div class="col-md-2">
                                <ul>
                                    <li><a href="https://dir.indiamart.com/indianexporters/ayur.html"><b>Ayurvedic,Herbal
                                                Products & Medicine</b></a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/herbal-syrups.html">Herbal Syrups</a>
                                    </li>
                                    <li><a href="https://dir.indiamart.com/impcat/herbal-ayurvedic-medicines.html">Herbal
                                            Ayurvedic Medicines</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/ayurvedic-tablets.html">Ayurvedic
                                            Tablets</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/ayurvedic-medicine.html">Ayurvedic
                                            Medicine</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/herb-capsule.html">Herb Capsule</a>
                                    </li>
                                    <li><a href="https://dir.indiamart.com/impcat/herbal-capsules.html">Herbal
                                            Capsules</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/areca-nut.html">Areca Nut</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/betel-nuts.html">Betel Nuts</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/herbal-tablets.html">Herbal
                                            Tablets</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/ayurvedic-churna.html">Ayurvedic
                                            Churna</a></li>
                                    <li class="view-more"><a href="https://dir.indiamart.com/indianexporters/ayur.html">View More</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-2">
                                <ul>
                                    <li><a href="https://dir.indiamart.com/indianexporters/nutritional-supplements.html"><b>Nutraceuticals
                                                & Dietary Supplements</b></a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/nutrition-supplements.html">Nutritional
                                            Supplements</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/weight-gain-nutrition.html">Weight
                                            Gain Nutrition</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/protein-powder.html">Protein
                                            Powder</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/multivitamin-tablet.html">Multivitamin
                                            Tablet</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/multivitamin-syrup.html">Multivitamin
                                            Syrup</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/multivitamin-capsules.html">Multivitamin
                                            Capsules</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/dexorange-syrup.html">Dexorange
                                            Syrup</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/coenzyme-q10.html">Coenzyme Q10</a>
                                    </li>
                                    <li><a href="https://dir.indiamart.com/impcat/calcium-tablet.html">Calcium
                                            Tablet</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/whey-protein.html">Whey Protein</a>
                                    </li>
                                    <li class="view-more"><a href="https://dir.indiamart.com/indianexporters/nutritional-supplements.html">View
                                            More</a></li>
                                </ul>
                            </div>
                            <div class="col-md-2">
                                <ul>
                                    <li><a href="https://dir.indiamart.com/indianexporters/infections-drugs.html"><b>Anti
                                                Infective Drugs & Medicines</b></a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/hydroxychloroquine-sulphate.html">Hydroxychloroquine
                                            Sulphate</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/chloroquine-phosphate.html">Chloroquine
                                            Phosphate</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/antifungal-cream.html">Antifungal
                                            Cream</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/azithromycin-tablets.html">Azithromycin
                                            Tablets</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/tenofovir-tablet.html">Tenofovir
                                            Tablet</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/anti-hiv-medicines.html">Anti HIV
                                            Drugs</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/antiretroviral-drug.html">Antiretroviral
                                            Drug</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/itraconazole-medicine.html">Itraconazole
                                            Medicine</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/anti-infective-agent.html">Anti
                                            Infective Agent</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/cefixime.html">Cefixime</a></li>
                                    <li class="view-more"><a href="https://dir.indiamart.com/indianexporters/infections-drugs.html">View
                                            More</a></li>
                                </ul>
                            </div>
                            <div class="col-md-2">
                                <ul>
                                    <li><a href="https://dir.indiamart.com/indianexporters/cardiovascular-drugs.html"><b>Cardiovascular
                                                Drugs & Medication</b></a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/erythropoietin-injection.html">Erythropoietin
                                            Injection</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/insulin-pen.html">Insulin Pen</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/metformin-tablets.html">Metformin
                                            Tablets</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/antidiabetic-medicine.html">Antidiabetic
                                            Medicine</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/enoxaparin-injection.html">Enoxaparin
                                            Injection</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/darbepoetin-alfa-injection.html">Darbepoetin
                                            Alfa Injection</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/mephentermine-sulphate-injectable.html">Mephentermine
                                            Sulphate Injection</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/metformin-hydrochloride.html">Metformin
                                            Hydrochloride</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/alpha-ketoanalogue-tablet.html">Alpha
                                            Ketoanalogue Tablet</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/lantus.html">Lantus</a></li>
                                    <li class="view-more"><a href="https://dir.indiamart.com/indianexporters/cardiovascular-drugs.html">View
                                            More</a></li>
                                </ul>
                            </div>
                            <div class="col-md-2">
                                <ul>
                                    <li><a href="https://dir.indiamart.com/indianexporters/pain-relief-drugs.html"><b>Pain
                                                Relief Drugs & Pharmaceuticals</b></a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/pain-killers.html">Pain Killers</a>
                                    </li>
                                    <li><a href="https://dir.indiamart.com/impcat/paracetamol-tablets.html">Paracetamol
                                            Tablets</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/pain-reliever.html">Pain Reliever</a>
                                    </li>
                                    <li><a href="https://dir.indiamart.com/impcat/aceclofenac-tablets.html">Aceclofenac
                                            Tablets</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/joint-pain-relief-capsule.html">Joint
                                            Pain Relief Capsule</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/pain-relief-drug.html">Pain Relief
                                            Drug</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/iodex-pain-reliever-gel.html">Iodex
                                            Pain Reliever Gel</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/paracetamol-syrup.html">Paracetamol
                                            Syrup</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/etoricoxib-tablet.html">Etoricoxib
                                            Tablet</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/pain-reliever-gel.html">Pain Reliever
                                            Gel</a></li>
                                    <li class="view-more"><a href="https://dir.indiamart.com/indianexporters/pain-relief-drugs.html">View
                                            More</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="row">
                            <a href="https://dir.indiamart.com/industry/drugs-medicines.html" class="view-all-prods">View All Products in <b>Drugs & Pharmaceuticals <i
                                        class="fa fa-angle-right"></i></b></a>
                        </div>
                    </div>
                </div>
                <div class="col menu-item">
                    <div class="menu-item-wrapper p20">
                        <i class="hm-icn19"></i><span>Hospital & Diagnostics</span>
                    </div>
                    <div class="sub-menu">
                        <div class="row">
                            <div class="col-md-2">
                                <ul>
                                    <li><a href="https://dir.indiamart.com/indianexporters/medical-clothing.html"><b>Medical
                                                & Surgical Clothing</b></a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/disposable-face-mask.html">Disposable
                                            Face Mask</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/surgical-masks.html">Surgical
                                            Masks</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/earloop-masks.html">Earloop Masks</a>
                                    </li>
                                    <li><a href="https://dir.indiamart.com/impcat/surgical-gloves.html">Surgical
                                            Gloves</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/activated-carbon-mask.html">Activated
                                            Carbon Mask</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/surgical-gown.html">Surgical Gown</a>
                                    </li>
                                    <li><a href="https://dir.indiamart.com/impcat/examination-gloves.html">Non-sterile
                                            Gloves</a></li>
                                    <li class="view-more"><a href="https://dir.indiamart.com/indianexporters/medical-clothing.html">View
                                            More</a></li>
                                </ul>
                            </div>
                            <div class="col-md-2">
                                <ul>
                                    <li><a href="https://dir.indiamart.com/indianexporters/me_surgl.html"><b>Surgical &
                                                ICU Equipments</b></a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/ventilator-circuits.html">Ventilator
                                            Circuits</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/anaesthesia-vaporizer.html">Anaesthesia
                                            Vaporizer</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/guedel-pattern-airway.html">Guedel
                                            Pattern Airway</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/icu-ventilator.html">ICU
                                            Ventilator</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/forehead-thermometer.html">Forehead
                                            Thermometer</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/medical-ventilators.html">Medical
                                            Ventilators</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/portable-ventilator.html">Portable
                                            Medical Ventilator</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/medical-equipment.html">Medical
                                            Equipment</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/glucometer.html">Glucometer</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/medical-machinery.html">Medical
                                            Machinery</a></li>
                                    <li class="view-more"><a href="https://dir.indiamart.com/indianexporters/me_surgl.html">View More</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-2">
                                <ul>
                                    <li><a href="https://dir.indiamart.com/indianexporters/clinical-instruments.html"><b>Medical
                                                Laboratory Instruments</b></a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/egg-incubators.html">Egg
                                            Incubators</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/blood-glucose-test-strips.html">Sugar
                                            Test Strips</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/auto-hematology-analyser.html">Automated
                                            Hematology Analyzer</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/hematology-analyzers.html">CoronaVirus
                                            PPE Kit</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/hiv-safety-kit.html">HIV Protection
                                            Kit</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/pregnancy-test-kits.html">Pregnancy
                                            Test Kits</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/biochemistry-analyzer.html">Biochemistry
                                            Analyzer</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/cell-counter.html">Cell Counter</a>
                                    </li>
                                    <li><a href="https://dir.indiamart.com/impcat/erba-biochemistry-analyzer.html">Erba
                                            Biochemistry Analyzer</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/diagnostic-test-kit.html">Diagnostic
                                            Test Kit</a></li>
                                    <li class="view-more"><a href="https://dir.indiamart.com/indianexporters/clinical-instruments.html">View
                                            More</a></li>
                                </ul>
                            </div>
                            <div class="col-md-2">
                                <ul>
                                    <li><a href="https://dir.indiamart.com/indianexporters/ms_medic.html"><b>Surgical &
                                                Medical Consumables</b></a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/face-mask.html">Face Mask</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/3-ply-face-mask.html">3 Ply Face
                                            Mask</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/n95-respirator-mask.html">N95 Mask</a>
                                    </li>
                                    <li><a href="https://dir.indiamart.com/impcat/surgical-spirit.html">Surgical
                                            Spirit</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/non-woven-face-mask.html">Non Woven
                                            Face Mask</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/medical-kit.html">Medical Kit</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/antiseptic-lotion.html">Antiseptic
                                            Lotion</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/colostomy-bag.html">Colostomy Bag</a>
                                    </li>
                                    <li><a href="https://dir.indiamart.com/impcat/disposable-respirator.html">Disposable
                                            Respirator</a></li>
                                    <li class="view-more"><a href="https://dir.indiamart.com/indianexporters/ms_medic.html">View More</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-2">
                                <ul>
                                    <li><a href="https://dir.indiamart.com/indianexporters/pathology-instruments.html"><b>Diagnostic
                                                Medical Imaging Equipment</b></a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/ultrasound-machine.html">Ultrasound
                                            Machines</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/x-ray-machine.html">X Ray Machine</a>
                                    </li>
                                    <li><a href="https://dir.indiamart.com/impcat/digital-x-ray-machine.html">Digital X
                                            Ray Machine</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/ge-ultrasound-machine.html">GE
                                            Ultrasound Machine</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/ct-scan-machine.html">CT Scan
                                            Machine</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/dental-x-ray-machine.html">Dental X
                                            Ray Machine</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/x-ray-films.html">X Ray Films</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/mri-machine.html">MRI Machine</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/portable-x-ray-machines.html">Portable
                                            X Ray Machines</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/ecg-machine.html">ECG Machine</a></li>
                                    <li class="view-more"><a href="https://dir.indiamart.com/indianexporters/pathology-instruments.html">View
                                            More</a></li>
                                </ul>
                            </div>
                            <div class="col-md-2">
                                <ul>
                                    <li><a href="https://dir.indiamart.com/indianexporters/rehabilitation-aids.html"><b>Physiotherapy
                                                & Rehab Aids</b></a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/physiotherapy-instruments.html">Physiotherapy
                                            Equipment</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/artificial-limbs.html">Artificial
                                            Limbs</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/back-support-belts.html">Back Support
                                            Belts</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/prosthetics-foot.html">Prosthetics
                                            Foot</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/ultrasound-therapy-equipment.html">Ultrasound
                                            Therapy Equipment</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/ayurvedic-therapy-equipment.html">Ayurvedic
                                            Therapy Equipment</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/tens-unit.html">TENS Unit</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/gel-pads.html">Gel Pads</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/interferential-therapy-unit.html">Interferential
                                            Therapy Unit</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/knee-ankle-foot-orthosis-kafo.html">Orthotic
                                            & Prosthetic Equipment</a></li>
                                    <li class="view-more"><a href="https://dir.indiamart.com/indianexporters/rehabilitation-aids.html">View
                                            More</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="row">
                            <a href="https://dir.indiamart.com/industry/medical-pharma.html" class="view-all-prods">View
                                All Products in <b>Hospital & Diagnostics<i class="fa fa-angle-right"></i></b></a>
                        </div>
                    </div>
                </div>
                <div class="col menu-item">
                    <div class="menu-item-wrapper p20">
                        <i class="hm-icn20"></i><span> Food & Agriculture
                        </span>
                    </div>
                    <div class="sub-menu">
                        <div class="row">
                            <div class="col-md-2">
                                <ul>
                                    <li><a href="https://dir.indiamart.com/indianexporters/m_rcmach.html"><b>Cereals &
                                                Food Grains</b></a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/wheat-flour.html">Wheat Flour</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/rice.html">Rice</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/wheat.html">Wheat</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/toor-dal.html">Toor Dal</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/sugar.html">Sugar</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/pulses.html">Pulses</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/maize.html">Maize</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/basmati-rice.html">Basmati Rice</a>
                                    </li>
                                    <li><a href="https://dir.indiamart.com/impcat/chana-dal.html">Chana Dal</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/wheat-grains.html">Wheat Grains</a>
                                    </li>
                                    <li class="view-more"><a href="https://dir.indiamart.com/indianexporters/m_rcmach.html">View More</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-2">
                                <ul>
                                    <li><a href="https://dir.indiamart.com/indianexporters/ag_meat.html"><b>Meat &
                                                Poultry Food</b></a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/chicken.html">Chicken</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/broiler-chicken.html">Broiler
                                            Chicken</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/egg.html">Egg</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/goat-meat.html">Goat Meat</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/poultry-eggs.html">Poultry Eggs</a>
                                    </li>
                                    <li><a href="https://dir.indiamart.com/impcat/fresh-meat.html">Fresh Meat</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/boneless-chicken.html">Boneless
                                            Chicken</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/frozen-chicken.html">Frozen
                                            Chicken</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/buffalo-meat.html">Buffalo Meat</a>
                                    </li>
                                    <li><a href="https://dir.indiamart.com/impcat/hatching-eggs.html">Hatching Eggs</a>
                                    </li>
                                    <li class="view-more"><a href="https://dir.indiamart.com/indianexporters/ag_meat.html">View More</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-2">
                                <ul>
                                    <li><a href="https://dir.indiamart.com/indianexporters/fresh_vegetables.html"><b>Fresh,
                                                Dried & Preserved Vegetables</b></a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/potato.html">Potato</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/fresh-vegetables.html">Fresh
                                            Vegetables</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/onion.html">Onion</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/red-onion.html">Red Onion</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/tomato.html">Tomato</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/fresh-mushroom.html">Mushroom</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/red-chilli.html">Red Chilli</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/garlic.html">Garlic</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/ginger.html">Ginger</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/spicy-vegetables.html">Chilli</a></li>
                                    <li class="view-more"><a href="https://dir.indiamart.com/indianexporters/fresh_vegetables.html">View
                                            More</a></li>
                                </ul>
                            </div>
                            <div class="col-md-2">
                                <ul>
                                    <li><a href="https://dir.indiamart.com/indianexporters/dairy.html"><b>Milk & Dairy
                                                Products</b></a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/milk.html">Milk</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/pure-ghee.html">Pure Ghee</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/paneer.html">Paneer</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/ice-cream.html">Ice Cream</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/milk-powder.html">Milk Powder</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/amul-milk.html">Amul Dairy
                                            Products</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/skimmed-milk-powder.html">Skimmed Milk
                                            Powder</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/milk-khoya.html">Milk Khoya</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/fresh-cow-milk.html">Fresh Cow
                                            Milk</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/amul-milk-powder.html">Amul Milk
                                            Powder</a></li>
                                    <li class="view-more"><a href="https://dir.indiamart.com/indianexporters/dairy.html">View More</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-2">
                                <ul>
                                    <li><a href="https://dir.indiamart.com/indianexporters/ag_spice.html"><b>Cooking
                                                Spices and Masala</b></a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/green-cardamom.html">Green
                                            Cardamom</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/black-pepper.html">Black Pepper</a>
                                    </li>
                                    <li><a href="https://dir.indiamart.com/impcat/cardamom.html">Cardamom</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/cumin-seeds.html">Cumin Seeds</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/turmeric.html">Turmeric</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/dry-red-chilli.html">Dry Red
                                            Chilli</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/tamarind.html">Tamarind</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/turmeric-powder.html">Turmeric
                                            Powder</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/mustard-seeds.html">Mustard Seeds</a>
                                    </li>
                                    <li><a href="https://dir.indiamart.com/impcat/red-chilli-powder.html">Red Chilli
                                            Powder</a></li>
                                    <li class="view-more"><a href="https://dir.indiamart.com/indianexporters/ag_spice.html">View More</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-2">
                                <ul>
                                    <li><a href="https://dir.indiamart.com/indianexporters/ag_oil.html"><b>Edible Oil &
                                                Allied Products</b></a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/mustard-oil.html">Mustard Oil</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/soybean-refined-oil.html">Soybean
                                            Refined Oil</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/cottonseed-oil.html">Cottonseed
                                            Oil</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/groundnut-oil.html">Groundnut Oil</a>
                                    </li>
                                    <li><a href="https://dir.indiamart.com/impcat/refined-sunflower-oil.html">Refined
                                            Sunflower Oil</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/cooking-oil.html">Cooking Oil</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/soybean-oil.html">Soybean Oil</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/refined-oil.html">Refined Oil</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/fortune-refined-oil.html">Fortune
                                            Refined Oil</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/fortune-cooking-oil.html">Fortune
                                            Cooking Oil</a></li>
                                    <li class="view-more"><a href="https://dir.indiamart.com/indianexporters/ag_oil.html">View More</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="row">
                            <a href="https://dir.indiamart.com/industry/agro-farm.html" class="view-all-prods">View All
                                Products in <b> Food & Agriculture
                                    <i class="fa fa-angle-right"></i></b></a>
                        </div>
                    </div>
                </div>
                <div class="col menu-item">
                    <div class="menu-item-wrapper">
                        <i class="hm-icn5"></i><span>Industrial Machinery</span>
                    </div>
                    <div class="sub-menu">
                        <div class="row">
                            <div class="col-md-2">
                                <ul>
                                    <li><a href="https://dir.indiamart.com/indianexporters/e_wpurif.html"><b>Water
                                                Treatment & Purification Plant</b></a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/water-purification-plants.html">Water
                                            Purification Plants</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/waterpurificationplants.html">Water
                                            Treatment Plants</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/reverse-osmosis-plant.html">Reverse
                                            Osmosis Plants</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/mineral-water-plants.html">Mineral
                                            Water Plant</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/industrial-ro-system.html">Industrial
                                            RO System</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/water-softening-system.html">Water
                                            Softening Systems</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/effluent-treatment-plant.html">Effluent
                                            Treatment & Wastewater Treatment Plant</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/industrial-water-filters.html">Industrial
                                            Water Filters & Filter Media</a></li>
                                    <li class="view-more"><a href="https://dir.indiamart.com/indianexporters/e_wpurif.html">View More</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-2">
                                <ul>
                                    <li><a href="https://dir.indiamart.com/indianexporters/m_fopmc.html"><b>Food
                                                Processing Plants & Machinery</b></a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/rice-mill-machinery.html">Rice Mill
                                            Machinery</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/sugar-machines.html">Sugarcane Juice
                                            Machine & Sugar Mill Machinery</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/mixer-grinder.html">Mixer Grinder</a>
                                    </li>
                                    <li><a href="https://dir.indiamart.com/impcat/juicer-mixer-grinder.html">Juicer
                                            Mixer Grinder</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/animal-feed-making-machine.html">Animal
                                            Feed Making Machine</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/food-cutter.html">Food Cutter</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/papad-making-machine.html">Papad
                                            Making Machine</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/seed-processing-machinery.html">Seed
                                            Processing Machinery</a></li>
                                    <li class="view-more"><a href="https://dir.indiamart.com/indianexporters/m_fopmc.html">View More</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-2">
                                <ul>
                                    <li><a href="https://dir.indiamart.com/indianexporters/m_prmach.html"><b>Printing
                                                Machinery & Equipment</b></a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/offset-printing-machines.html">Offset
                                            Printing Machines</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/card-printer.html">Card Printer</a>
                                    </li>
                                    <li><a href="https://dir.indiamart.com/impcat/barcode-printers.html">Barcode
                                            Printers</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/cutting-plotter.html">Cutting
                                            Plotter</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/screen-printing-equipment.html">Screen
                                            Printing Equipment</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/bag-printing-machine.html">Bag
                                            Printing Machine</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/sublimation-printing-machine.html">Sublimation
                                            Printing Machine</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/pad-printing-equipment.html">Pad
                                            Printing Equipment</a></li>
                                    <li class="view-more"><a href="https://dir.indiamart.com/indianexporters/m_prmach.html">View More</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-2">
                                <ul>
                                    <li><a href="https://dir.indiamart.com/indianexporters/m_sewmc.html"><b>Sewing,Knitting
                                                & Embroidery Machine</b></a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/flat-knitting-machines.html">Flat
                                            Knitting Machines</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/industrial-sewing-machine.html">Industrial
                                            Sewing Machine</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/embroidery-machine.html">Embroidery
                                            Machine</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/home-sewing-machine.html">Home Sewing
                                            Machine</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/knitting-machines.html">Knitting
                                            Machines</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/sewing-machine-accessories.html">Sewing
                                            Machine Accessories</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/sewing-machine-parts.html">Sewing
                                            Machine Parts</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/overlock-machine.html">Overlock
                                            Machine</a></li>
                                    <li class="view-more"><a href="https://dir.indiamart.com/indianexporters/m_sewmc.html">View More</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-2">
                                <ul>
                                    <li><a href="https://dir.indiamart.com/indianexporters/fastfood-beverage-machines.html"><b>Fast
                                                Food & Beverages Machinery</b></a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/snack-machine.html">Snack Machine</a>
                                    </li>
                                    <li><a href="https://dir.indiamart.com/impcat/tea-maker.html">Tea Maker</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/coffee-machine.html">Coffee
                                            Machine</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/noodle-machine.html">Noodle
                                            Machine</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/extruder-machine.html">Extruder
                                            Machine</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/idli-maker.html">Idli Maker</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/deep-fryer.html">Deep Fryer</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/coffee-roasting-machine.html">Coffee
                                            Roasting Machine</a></li>
                                    <li class="view-more"><a href="https://dir.indiamart.com/indianexporters/fastfood-beverage-machines.html">View
                                            More</a></li>
                                </ul>
                            </div>
                            <div class="col-md-2">
                                <ul>
                                    <li><a href="https://dir.indiamart.com/indianexporters/e_comprs.html"><b>Air
                                                Compressors, Accessories & Parts</b></a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/air-compressors.html">Air
                                            Compressors</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/refrigeration-compressors.html">Refrigeration
                                            Compressors</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/reciprocating-air-compressor.html">Reciprocating
                                            Air Compressor</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/air-filters.html">Air Filters</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/compressed-air-dryer.html">Compressed
                                            Air Dryer</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/oil-free-air-compressor.html">Oil Free
                                            Air Compressor</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/air-receiver.html">Air Receiver</a>
                                    </li>
                                    <li><a href="https://dir.indiamart.com/impcat/gas-compressors.html">Gas
                                            Compressors</a></li>
                                    <li class="view-more"><a href="https://dir.indiamart.com/indianexporters/e_comprs.html">View More</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="row">
                            <a href="https://dir.indiamart.com/industry/plant-machinery.html" class="view-all-prods">View All Products in <b>Industrial Machinery <i
                                        class="fa fa-angle-right"></i></b></a>
                        </div>
                    </div>
                </div>
                <div class="col menu-item">
                    <div class="menu-item-wrapper">
                        <i class="hm-icn3"></i><span>Industrial Supplies</span>
                    </div>
                    <div class="sub-menu">
                        <div class="row">
                            <div class="col-md-2">
                                <ul>
                                    <li><a href="https://dir.indiamart.com/indianexporters/e_pump.html"><b>Pumps,
                                                Pumping Machines & Spares</b></a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/water-pump.html">Water Pumps</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/diesel-engine-pump-sets.html">Diesel
                                            Engine Pump Sets</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/monoblock-pumps.html">Monoblock
                                            Pumps</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/pressure-pumps.html">Pressure
                                            Pumps</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/fuel-pump.html">Fuel Pump</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/submersible-pump-parts.html">Submersible
                                            Pump Parts</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/centrifugal-pumps.html">Centrifugal
                                            Pumps</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/hydraulic-pumps.html">Hydraulic
                                            Pumps</a></li>
                                    <li class="view-more"><a href="https://dir.indiamart.com/indianexporters/e_pump.html">View More</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-2">
                                <ul>
                                    <li><a href="https://dir.indiamart.com/indianexporters/i_contan.html"><b>Storage
                                                Tanks, Drums & Containers</b></a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/water-tanks.html">Water Tanks</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/plastic-water-tank.html">Plastic Water
                                            Tank</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/plastic-tank.html">Plastic Tank</a>
                                    </li>
                                    <li><a href="https://dir.indiamart.com/impcat/shipping-containers.html">Shipping
                                            Containers</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/plastic-drums.html">Plastic Drums</a>
                                    </li>
                                    <li><a href="https://dir.indiamart.com/impcat/drums.html">Drums</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/barrels.html">Barrels</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/fuel-storage-tanks.html">Fuel Storage
                                            Tanks</a></li>
                                    <li class="view-more"><a href="https://dir.indiamart.com/indianexporters/i_contan.html">View More</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-2">
                                <ul>
                                    <li><a href="https://dir.indiamart.com/indianexporters/o_lubric.html"><b>Oils,
                                                Grease & Lubricants</b></a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/automotive-oils.html">Automotive
                                            Oils</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/lubricating-oil.html">Lubricating
                                            Oil</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/grease.html">Grease</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/compressor-oil.html">Compressor
                                            Oil</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/diesel-engine-oil.html">Diesel Engine
                                            Oil</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/gear-oil.html">Gear Oil</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/castrol-engine-oil.html">Castrol
                                            Engine Oil</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/gear-lubricants.html">Gear
                                            Lubricants</a></li>
                                    <li class="view-more"><a href="https://dir.indiamart.com/indianexporters/o_lubric.html">View More</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-2">
                                <ul>
                                    <li><a href="https://dir.indiamart.com/indianexporters/pressure-sensitive-tapes.html"><b>Adhesive
                                                & Pressure Sensitive Tapes</b></a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/packaging-tapes.html">Packaging
                                            Tapes</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/sealing-tape.html">Sealing Tape</a>
                                    </li>
                                    <li><a href="https://dir.indiamart.com/impcat/decorative-tape.html">Decorative
                                            Tape</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/electric-tape.html">Electric Tape</a>
                                    </li>
                                    <li><a href="https://dir.indiamart.com/impcat/stationery-tape.html">Stationery
                                            Tape</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/aluminum-foil-tape.html">Aluminum Foil
                                            Tape</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/industrial-tape.html">Industrial
                                            Tape</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/bopp-tapes.html">BOPP Tapes</a></li>
                                    <li class="view-more"><a href="https://dir.indiamart.com/indianexporters/pressure-sensitive-tapes.html">View
                                            More</a></li>
                                </ul>
                            </div>
                            <div class="col-md-2">
                                <ul>
                                    <li><a href="https://dir.indiamart.com/indianexporters/e_heatig.html"><b>Heater,
                                                Thermostat & Heating Devices</b></a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/water-heaters.html">Water Heater &
                                            Geyser</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/room-heaters.html">Room Heaters</a>
                                    </li>
                                    <li><a href="https://dir.indiamart.com/impcat/heating-elements.html">Heating
                                            Elements</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/heating-components.html">Heating
                                            Components & Spares</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/water-immersion-heater.html">Water
                                            Immersion Heater</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/heating-coils.html">Heating Coils &
                                            Tubes</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/solar-water-heater.html">Solar Water
                                            Heater</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/thermal-fluid-heaters.html">Thermic
                                            Fluid Heaters</a></li>
                                    <li class="view-more"><a href="https://dir.indiamart.com/indianexporters/e_heatig.html">View More</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-2">
                                <ul>
                                    <li><a href="https://dir.indiamart.com/indianexporters/wire-mesh.html"><b>Wire Mesh
                                                & Gratings</b></a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/metal-mesh.html">Metal Mesh</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/wiremeshing.html">Wire Mesh</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/steel-mesh.html">Steel Mesh</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/perforatedsheets.html">Perforated
                                            Sheets</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/gratings.html">Gratings</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/vibrating-screens.html">Vibrating
                                            Screens</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/metal-gratings.html">Metal
                                            Gratings</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/gi-wire-mesh.html">GI Wire Mesh</a>
                                    </li>
                                    <li class="view-more"><a href="https://dir.indiamart.com/indianexporters/wire-mesh.html">View
                                            More</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="row">
                            <a href="https://dir.indiamart.com/industry/industrial-supplies.html" class="view-all-prods">View All Products in <b>Industry Supplies <i
                                        class="fa fa-angle-right"></i></b></a>
                        </div>
                    </div>
                </div>
                <div class="col menu-item">
                    <div class="menu-item-wrapper">
                        <i class="hm-icn2"></i><span>Electronics &amp; Electrical</span>
                    </div>
                    <div class="sub-menu">
                        <div class="row">
                            <div class="col-md-2">
                                <ul>
                                    <li><a href="https://dir.indiamart.com/indianexporters/office_equip.html"><b>Office
                                                Automation Products & Devices</b></a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/xerox-machines.html">Xerox
                                            Machines</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/billing-machines.html">Billing
                                            Machines</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/projector.html">Projector</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/computer-printers.html">Computer
                                            Printers</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/laser-printer.html">Laser Printer</a>
                                    </li>
                                    <li><a href="https://dir.indiamart.com/impcat/multifunction-printer.html">Multifunction
                                            Printer</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/inkjet-printer.html">Inkjet
                                            Printer</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/counting-machines.html">Counting
                                            Machines</a></li>
                                    <li class="view-more"><a href="https://dir.indiamart.com/indianexporters/office_equip.html">View
                                            More</a></li>
                                </ul>
                            </div>
                            <div class="col-md-2">
                                <ul>
                                    <li><a href="https://dir.indiamart.com/indianexporters/energy-conservation-products.html"><b>Solar
                                                & Renewable Energy Products</b></a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/solar-panels.html">Solar Panels</a>
                                    </li>
                                    <li><a href="https://dir.indiamart.com/impcat/solar-power-plants.html">Solar Power
                                            Plants</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/solar-lighting.html">Solar
                                            Lighting</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/solar-water-heater.html">Solar Water
                                            Heater</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/water-pump.html">Water Pumps</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/water-heaters.html">Water Heater &
                                            Geyser</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/solar-inverter.html">Solar
                                            Inverter</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/solar-lamps.html">Solar Lamps</a></li>
                                    <li class="view-more"><a href="https://dir.indiamart.com/indianexporters/energy-conservation-products.html">View
                                            More</a></li>
                                </ul>
                            </div>
                            <div class="col-md-2">
                                <ul>
                                    <li><a href="https://dir.indiamart.com/indianexporters/led-light-bulbs.html"><b>Indoor
                                                Lights & Lighting Accessories</b></a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/light-bulb.html">Light Bulb</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/bulb-raw-material.html">Bulb Raw
                                            Material</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/led-bulb.html">LED Bulb</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/tube-light.html">Tube Light</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/lighting-component.html">Lighting
                                            Component</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/ceiling-lights.html">Ceiling
                                            Lights</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/lamp-holders.html">Lamp Holders</a>
                                    </li>
                                    <li><a href="https://dir.indiamart.com/impcat/panel-lamps.html">Panel Light</a></li>
                                    <li class="view-more"><a href="https://dir.indiamart.com/indianexporters/led-light-bulbs.html">View
                                            More</a></li>
                                </ul>
                            </div>
                            <div class="col-md-2">
                                <ul>
                                    <li><a href="https://dir.indiamart.com/indianexporters/battery.html"><b>Batteries &
                                                Charge Storage Devices</b></a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/inverter-batteries.html">Inverter
                                            Batteries</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/lithium-battery.html">Lithium
                                            Battery</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/automotive-batteries.html">Automotive
                                            Batteries</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/electric-vehicle-battery.html">Electric
                                            Vehicle Battery</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/battery-charge-devices.html">Battery
                                            Chargers</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/bike-batteries.html">Two Wheeler
                                            Battery</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/car-batteries.html">Car Batteries</a>
                                    </li>
                                    <li><a href="https://dir.indiamart.com/impcat/mobile-charger.html">Mobile
                                            Charger</a></li>
                                    <li class="view-more"><a href="https://dir.indiamart.com/indianexporters/battery.html">View More</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-2">
                                <ul>
                                    <li><a href="https://dir.indiamart.com/indianexporters/led-tv-monitors.html"><b>LED,
                                                LCD, Smart TV and Home Theatre</b></a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/led-television.html">LED TV</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/set-top-box.html">Set Top Box</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/home-theatre.html">Home Theatre</a>
                                    </li>
                                    <li><a href="https://dir.indiamart.com/impcat/smart-tv.html">Smart TV</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/dth-kit.html">DTH Kit</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/tv-accessories.html">TV
                                            Accessories</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/lcd-television.html">LCD
                                            Television</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/satellite-tv-receiver.html">Satellite
                                            TV Receiver</a></li>
                                    <li class="view-more"><a href="https://dir.indiamart.com/indianexporters/led-tv-monitors.html">View
                                            More</a></li>
                                </ul>
                            </div>
                            <div class="col-md-2">
                                <ul>
                                    <li><a href="https://dir.indiamart.com/indianexporters/ho_misce.html"><b>Home
                                                Appliances & Machines</b></a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/washing-machine.html">Washing
                                            Machine</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/juicer-mixer-grinder.html">Juicer
                                            Mixer Grinder</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/electric-irons.html">Electric
                                            Irons</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/coffee-makers.html">Coffee Makers</a>
                                    </li>
                                    <li><a href="https://dir.indiamart.com/impcat/electric-cooktop.html">Electric
                                            Cooktop</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/microwave-oven.html">Microwave
                                            Oven</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/steam-iron.html">Steam Iron</a></li>
                                    <li><a href="https://dir.indiamart.com/impcat/mixer-grinder.html">Mixer Grinder</a>
                                    </li>
                                    <li class="view-more"><a href="https://dir.indiamart.com/indianexporters/ho_misce.html">View More</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="row">
                            <a href="https://dir.indiamart.com/industry/electronic-goods.html" class="view-all-prods">View All Products in <b>Electronics &amp; Electrical <i
                                        class="fa fa-angle-right"></i></b></a>
                        </div>
                    </div>
                </div>
                <div class="col menu-item">
                    <div class="menu-item-wrapper">
                        <a href="https://dir.indiamart.com/"><span class="arrow">View All Categories</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
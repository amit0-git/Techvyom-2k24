<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">



    <xsl:template match="/collection">


        <html lang="en">

            <head>
                <meta charset="UTF-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Events</title>
                <link rel="icon" type="image/png" href="assets/artificial-intelligence.png" />
                <!-- fontawesome icon cdn -->
                <script src="https://kit.fontawesome.com/04fd96b6f4.js" crossorigin="anonymous"></script>

                <link rel="stylesheet" type="text/css" href="css/events.css"></link>
                <link rel="stylesheet" href="css/navbar.css"></link>
                <link rel="stylesheet" href="css/footer.css"></link>
                <link rel="stylesheet" href="css/stars.css"></link>


            </head>

            <body>
                <div id="eventsContainer">


                    <div class="wrapper">
                        <div id="stars"></div>
                        <div id="stars2"></div>
                        <div id="stars3"></div>

                    </div>

                    <!--Nav
                    bar -->


                    <div id="mobilenavbar">
                        <ul>
                            <li>
                                <a href="index.html"><i class="fa-solid fa-house"
                                        style="margin-right: 10px;"></i>Home</a>
                            </li>
                            <li>
                                <a href="events.html"><i class="fa-solid fa-calendar-days"
                                        style="margin-right: 10px;"></i>Events</a>
                            </li>
                            <li>
                                <a href="hackathon.html"><i class="fa-solid fa-flag-checkered"
                                        style="margin-right: 10px;"></i>Hackathon</a>
                            </li>
                            <li>
                                <a href="rulebook.html"><i class="fa-solid fa-scale-balanced"
                                        style="margin-right: 10px;"></i>Rulebook</a>
                            </li>
                            <li>
                                <a href="gallery.html"><i class="fa-solid fa-photo-film"
                                        style="margin-right: 10px;"></i>Gallery</a>
                            </li>
                            <li><a href="#"><i class="fa-regular fa-file" style="margin-right: 10px;"></i>Pre Register</a></li>
                            <li><a href="index.html#queryformwrap"><i class="fa-regular fa-envelope" style="margin-right: 10px;"></i>Contact Us</a></li>
                            <li class="mobilegame"><a href="space-tic-tac.html"><i class="fa-solid fa-gamepad"
                                style="margin-right: 10px;"></i>Gamezone</a></li>
                            <li class="gamenav">
                                <a href="game.html"><i class="fa-solid fa-gamepad"
                                        style="margin-right: 10px;"></i>Gamezone</a>
                            </li>


                        </ul>
                    </div>


                    <div id="navbar" style="left: 50%; transform: translateX(-50%);">
                        <div id="navbar-left">
                            <img src="assets/SRMSIMS-logo.png" alt="" srcset="" />
                        </div>
                        <div id="navbar-right">
                            <ul>
                                <li>
                                    <a href="index.html">Home</a>
                                </li>
                                <li>
                                    <a href="events.html">Events</a>
                                </li>
                                <li>
                                    <a href="hackathon.html">Hackathon</a>
                                </li>
                                <li>
                                    <a href="rulebook.html">Rulebook</a>
                                </li>
                                <li>
                                    <a href="gallery.html">Gallery</a>
                                </li>
                                <li><a href="#">Pre Register</a></li>
                                <li><a href="index.html#queryformwrap">Contact Us</a></li>
                                <li class="gamenav">
                                    <a href="game.html">Gamezone</a>
                                </li>
                                <li id="navicon">
                                    <a href="javascript:void(0);" class="icon" onclick="mobileNav()">
                                        <i class="fa fa-bars"></i>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>


                    <h1 id="eventHH">Events</h1>
                    <p id="eventsdesc1">Note:-For More Info about any event visit Rulebook.</p>

                    <!-- club loop -->

                    <xsl:for-each select="club">

                        <!-- club wrapper -->
                        <div id="equinox">

                            <div id="equinox-left">
                                <div id="equinox-left-head">
                                    <xsl:value-of select="@NAME" />
                                </div>

                                <div id="equinox-left-desc">
                                    <xsl:value-of select="description" />
                                </div>
                            </div>

                            <div id="equinox-right" style="background-image: url('{background}');">

                            </div>

                        </div>

                        


                        <div
                            id="equinoxevents">

                            <!-- loop club events -->
                            <xsl:for-each select="event">

                                <div id="eventwrapper">
                                    <div id="eventbox">
                                        <img src="assets/frameup.svg" id="frameup" alt="" srcset="" />
                                        <img src="{image}" alt="" srcset=""
                                            id="poster" />
                                        <img src="assets/framedown.svg" id="framedown" alt=""
                                            srcset="" />

                                    </div>
                                    <div id="eventname">
                                        <xsl:value-of select="name" />
                                    </div>
                                </div>


                            </xsl:for-each>

                        </div>


                    </xsl:for-each>


                </div>


                <!-- footer -->

                <div id="footer">

                    <div id="footer-left">
                        <div id="footer-left-up">
                            <img src="assets/SRMS Logo.png" id="footer-srms" alt="" />
                        </div>
                        <div id="footer-left-down">
                            <div id="footer-left-down-head">
                                Follow Us
                            </div>

                            <div id="footer-left-down-icons">

                                <a href="https://twitter.com/SRMSCETBareilly" target="_blank">
                                    <i class="fa-brands fa-x-twitter" style="color: white;"></i>
                                </a>
                                <a href="https://www.facebook.com/srmscetbly" target="_blank">
                                    <i class="fa-brands fa-facebook-f" style="color: white;"></i>
                                </a>
                                <a href="https://www.youtube.com/srmstrust" target="_blank">
                                    <i class="fa-brands fa-youtube" style="color: white;"></i>
                                </a>
                                <a href="https://www.linkedin.com/school/srms-institutions/"
                                    target="_blank">
                                    <i class="fa-brands fa-linkedin" style="color: white;"></i>
                                </a>
                                <a href="https://www.instagram.com/srmstrust/" target="_blank">
                                    <i class="fa-brands fa-instagram" style="color: white;"></i>
                                </a>

                            </div>
                        </div>
                    </div>

                    <div id="footer-right">

                        <div id="footer-right-head">
                            SHRI RAM MURTI SMARAK COLLEGE OF ENGINEERING AND TECHNOLOGY
                        </div>

                        <div id="footer-right-address">
                            <i class="fa-solid fa-location-dot"
                                style="color: white;margin-right: 10px;"></i> Ram Murti Puram 13KM
        Nainital-Highway,Bareilly-243202 </div>

                        <div id="footer-right-phone">
                            <i class="fa-solid fa-phone" style="color:white;margin-right:10px"></i>
        Phone:0581-252246,2582249,2582231-32, <i class="fa-solid fa-fax"
                                style="color:white;margin-right:10px;margin-left: 10px;"></i>Fax:
        0581-2582330 </div>

                        <div id="footer-right-email">
                            <i class="fa-regular fa-envelope" style="color:white;margin-right:10px"></i>
        E-mail: <a href="mailto:tyro@srmscet.edu">tyro@srmscet.edu</a> <i
                                class="fa-brands fa-internet-explorer"
                                style="color:white;margin-right:10px;margin-left: 10px;"></i>
        Website: <a href="http://www.srms.ac.in" target="_blank">www.srms.ac.in</a>
                        </div>
                    </div>
                </div>


                <!-- JS Files -->
                <script src="js/event.js"></script>


            </body>

        </html>
    </xsl:template>


</xsl:stylesheet>
<template>
  <div>
    <!-- Preloader -->
    <div id="preloader">
      <div id="status">&nbsp;</div>
    </div>
    <!-- TOP NAVBAR -->
    <nav role="navigation" class="navbar navbar-static-top">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button data-target="#bs-example-navbar-collapse-1" data-toggle="collapse" class="navbar-toggle"
                  type="button">
            <span class="entypo-menu"></span>
          </button>
          <button class="navbar-toggle toggle-menu-mobile toggle-left" type="button">
            <span class="entypo-list-add"></span>
          </button>


          <div id="logo-mobile" class="visible-xs">
            <h1><span>v1.2</span></h1>
          </div>

        </div>


        <!-- Collect the nav links, forms, and other content for toggling -->
        <div id="bs-example-navbar-collapse-1" class="collapse navbar-collapse">

          <ul style="margin-right:0;" class="nav navbar-nav navbar-right">
            <li>
              <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                <img alt="" class="admin-pic img-circle" src="http://api.randomuser.me/portraits/thumb/men/10.jpg">Hi,
                {{username}} <b class="caret"></b>
              </a>
              <ul style="margin-top:14px;" role="menu" class="dropdown-setting dropdown-menu">
                <li>
                  <a href="#">
                    <span class="entypo-user"></span>&#160;&#160;My Profile</a>
                </li>
                <li>
                  <a href="#">
                    <span class="entypo-vcard"></span>&#160;&#160;Account Setting</a>
                </li>
                <li>
                  <a href="#">
                    <span class="entypo-lifebuoy"></span>&#160;&#160;Help</a>
                </li>
                <li class="divider"></li>
                <li>
                  <a
                    href="http://themeforest.net/item/apricot-navigation-admin-dashboard-template/7664475?WT.ac=category_item&WT.z_author=themesmile">
                    <span class="entypo-basket"></span>&#160;&#160; Purchase</a>
                </li>
              </ul>
            </li>
            <li>
              <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                <span class="icon-gear"></span>&#160;&#160;Setting</a>
              <ul role="menu" class="dropdown-setting dropdown-menu">

                <li class="theme-bg">
                  <div id="button-bg"></div>
                  <div id="button-bg2"></div>
                  <div id="button-bg3"></div>
                  <div id="button-bg5"></div>
                  <div id="button-bg6"></div>
                  <div id="button-bg7"></div>
                  <div id="button-bg8"></div>
                  <div id="button-bg9"></div>
                  <div id="button-bg10"></div>
                  <div id="button-bg11"></div>
                  <div id="button-bg12"></div>
                  <div id="button-bg13"></div>
                </li>
              </ul>
            </li>
          </ul>

        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
    </nav>

    <!-- /END OF TOP NAVBAR -->

    <!-- SIDE MENU -->
    <div id="skin-select">
      <div id="logo">
        <h1>OkayQA</h1>
      </div>

      <a id="toggle">
        <span class="entypo-menu"></span>
      </a>
      <div class="dark">
        <form action="#">
                <span>
                    <input type="text" name="search" value="" class="search rounded id_search"
                           placeholder="Search Menu..." autofocus="">
                </span>
        </form>
      </div>

      <div class="search-hover">
        <form id="demo-2">
          <input type="search" placeholder="Search Menu..." class="id_search">
        </form>
      </div>


      <div class="skin-part">
        <div id="tree-wrap">
          <div class="side-bar">
            <ul class="topnav menu-left-nest">
              <li>
                <a href="javascript:void(0);" style="border-left:0px solid!important;" class="title-menu-left">

                  <span class="widget-menu"></span>
                  <i data-toggle="tooltip" class="entypo-cog pull-right config-wrap"></i>

                </a>
              </li>

              <li>
                <a class="tooltip-tip ajax-load" href="javascript:void(0);" title="自动化">
                  <i class="icon-document-edit"></i>
                  <span>自动化</span>

                </a>
                <ul>
                  <li>
                    <a class="tooltip-tip2 ajax-load" href="javascript:void(0);" title="web自动化"><i
                      class="entypo-doc-text"></i><span>web自动化</span></a>
                  </li>
                  <li>
                    <a class="tooltip-tip2 ajax-load" href="javascript:void(0);" title="app自动化"><i
                      class="entypo-newspaper"></i><span>app自动化</span></a>
                  </li>
                  <li>
                    <a class="tooltip-tip2 ajax-load" href="javascript:void(0);" title="接口自动化"><i
                      class="entypo-newspaper"></i><span>接口自动化</span></a>
                  </li>
                </ul>
              </li>
              <li>
                <a class="tooltip-tip ajax-load" href="/pre" title="性能">
                  <i class="icon-feed"></i>
                  <span>性能</span>

                </a>
              </li>
              <li>
                <a class="tooltip-tip ajax-load" href="/util" title="工具">
                  <i class="icon-camera"></i>
                  <span>工具</span>

                </a>
              </li>
            </ul>

            <ul class="topnav menu-left-nest">
              <li>
                <a href="#" style="border-left:0px solid!important;" class="title-menu-left">

                  <span class="design-kit"></span>
                  <i data-toggle="tooltip" class="entypo-cog pull-right config-wrap"></i>

                </a>
              </li>

              <li>
                <a class="tooltip-tip ajax-load" href="javascript:void(0);" title="自动化用例">
                  <i class="icon-document-edit"></i>
                  <span>自动化用例</span>

                </a>
                <ul>
                  <li>
                    <router-link class="tooltip-tip2 ajax-load" to="/fanc/webauto" title="Web Case"><i
                      class="entypo-doc-text"></i><span>web自动化用例</span></router-link>
                  </li>
                  <li>
                    <router-link class="tooltip-tip2 ajax-load" to="/fanc/appauto" title="APP Case"><i
                      class="entypo-newspaper"></i><span>app自动化用例</span></router-link>
                  </li>
                  <li>
                    <router-link class="tooltip-tip2 ajax-load" to="/fanc/interface" title="Interface Case"><i
                      class="entypo-newspaper"></i><span>接口自动化用例</span></router-link>
                  </li>
                </ul>
              </li>
              <li>
                <a class="tooltip-tip ajax-load" href="mail.html" title="Mail">
                  <i class="icon-mail"></i>
                  <span>mail</span>
                  <div class="noft-blue">289</div>
                </a>
              </li>

              <li>
                <a class="tooltip-tip ajax-load" href="icon.html" title="Icons">
                  <i class="icon-preview"></i>
                  <span>Icons</span>
                  <div class="noft-blue" style="display: inline-block; float: none;">New</div>
                </a>
              </li>

              <li>
                <a class="tooltip-tip" href="#" title="Extra Pages">
                  <i class="icon-document-new"></i>
                  <span>Extra Page</span>
                </a>
                <ul>
                  <li>
                    <a class="tooltip-tip2 ajax-load" href="blank_page.html" title="Blank Page"><i
                      class="icon-media-record"></i><span>Blank Page</span></a>
                  </li>
                  <li>
                    <a class="tooltip-tip2 ajax-load" href="profile.html" title="Profile Page"><i class="icon-user"></i><span>Profile Page</span></a>
                  </li>
                  <li>
                    <a class="tooltip-tip2 ajax-load" href="invoice.html" title="Invoice"><i
                      class="entypo-newspaper"></i><span>Invoice</span></a>
                  </li>
                  <li>
                    <a class="tooltip-tip2 ajax-load" href="pricing_table.html" title="Pricing Table"><i
                      class="fontawesome-money"></i><span>Pricing Table</span></a>
                  </li>
                  <li>
                    <a class="tooltip-tip2 ajax-load" href="time-line.html" title="Time Line"><i
                      class="entypo-clock"></i><span>Time Line</span></a>
                  </li>
                  <li>
                    <a class="tooltip-tip2" href="404.html" title="404 Error Page"><i
                      class="icon-thumbs-down"></i><span>404 Error Page</span></a>
                  </li>
                  <li>
                    <a class="tooltip-tip2" href="500.html" title="500 Error Page"><i
                      class="icon-thumbs-down"></i><span>500 Error Page</span></a>
                  </li>
                  <li>
                    <a class="tooltip-tip2" href="lock-screen.html" title="Lock Screen"><i class="icon-lock"></i><span>Lock Screen</span></a>
                  </li>
                </ul>
              </li>

              <li>
                <a class="tooltip-tip " href="login.html" title="login">
                  <i class="icon-download"></i>
                  <span>Login</span>
                </a>
              </li>

            </ul>

            <ul id="menu-showhide" class="topnav menu-left-nest">
              <li>
                <a href="#" style="border-left:0px solid!important;" class="title-menu-left">

                  <span class="component"></span>
                  <i data-toggle="tooltip" class="entypo-cog pull-right config-wrap"></i>

                </a>
              </li>


              <li>
                <a class="tooltip-tip" href="#" title="UI Element">
                  <i class="icon-monitor"></i>
                  <span>UI Element</span>
                </a>
                <ul>
                  <li>
                    <a class="tooltip-tip2 ajax-load" href="element.html" title="Element"><i
                      class="icon-attachment"></i><span>Element</span></a>
                  </li>
                  <li><a class="tooltip-tip2 ajax-load" href="button.html" title="Button"><i
                    class="icon-view-list-large"></i><span>Button</span>
                    <div class="noft-blue-number">10</div>
                  </a>
                  </li>
                  <li>
                    <a class="tooltip-tip2 ajax-load" href="wizard.html" title="Tab & Accordion"><i
                      class="icon-folder"></i><span>Wizard</span>
                      <div class="noft-purple-number">3</div>
                    </a>
                  </li>
                  <li>
                    <a class="tooltip-tip2 ajax-load" href="calendar.html" title="Calender"><i
                      class="icon-calendar"></i><span>Calendar</span></a>
                  </li>
                  <li>
                    <a class="tooltip-tip2 ajax-load" href="tree.html" title="Tree View"><i
                      class="icon-view-list"></i><span>Tree View</span></a>
                  </li>
                  <li>
                    <a class="tooltip-tip2 ajax-load" href="grids.html" title="Grids"><i class="icon-menu"></i><span>Grids</span></a>
                  </li>
                  <li>
                    <a class="tooltip-tip2 ajax-load" href="chart.html" title="Chart"><i
                      class="icon-graph-pie"></i><span>Chart</span></a>
                  </li>
                  <li>
                    <a class="tooltip-tip ajax-load" href="typhography.html" title="Typhoghrapy">
                      <i class="icon-information"></i>
                      <span>Typhoghrapy</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a class="tooltip-tip" href="#" title="Form">
                  <i class="icon-document"></i>
                  <span>Form</span>
                </a>
                <ul>
                  <li>
                    <a class="tooltip-tip2 ajax-load" href="form-element.html" title="Form Elements"><i
                      class="icon-document-edit"></i><span>Form Elements</span></a>
                  </li>
                  <li>
                    <a class="tooltip-tip2 ajax-load" href="andvance-form.html" title="Andvance Form"><i
                      class="icon-map"></i><span>Andvance Form</span></a>
                  </li>
                  <li>
                    <a class="tooltip-tip2 ajax-load" href="text-editor.html" title="Text Editor"><i
                      class="icon-code"></i><span>Text Editor</span></a>
                  </li>
                  <li>
                    <a class="tooltip-tip2 ajax-load" href="file-upload.html" title="File Upload"><i
                      class="icon-upload"></i><span>File Upload</span></a>
                  </li>
                </ul>
              </li>
              <li>
                <a class="tooltip-tip" href="#" title="Tables">
                  <i class="icon-view-thumb"></i>
                  <span>Tables</span>
                </a>
                <ul>
                  <li>
                    <a class="tooltip-tip2 ajax-load" href="table-static.html" title="Table Static"><i
                      class="entypo-layout"></i><span>Table Static</span></a>
                  </li>
                  <li>
                    <a class="tooltip-tip2 ajax-load" href="table-dynamic.html" title="Table Dynamic"><i
                      class="entypo-menu"></i><span>Table Dynamic</span></a>
                  </li>
                </ul>
              </li>

              <li>
                <a class="tooltip-tip ajax-load" href="map.html" title="Map">
                  <i class="icon-location"></i>
                  <span>Map</span>

                </a>
              </li>
            </ul>


          </div>
        </div>
      </div>
    </div>
    <!-- END OF SIDE MENU -->


    <!--  PAPER WRAP -->
    <div class="wrap-fluid">
      <div class="container-fluid paper-wrap bevel tlbr">


        <!-- CONTENT -->
        <!--TITLE -->
        <div class="row">
          <div id="paper-top">
            <div class="col-lg-3">
            </div>
          </div>
        </div>
        <!--/ TITLE -->

        <!-- BREADCRUMB -->


        <div class="content-wrap">
          <router-view></router-view>
          <!-- /END OF CONTENT -->

        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Home",
    data(){
      return{
        username:'张三',
      }
    }
  }
</script>

<style scoped>

</style>

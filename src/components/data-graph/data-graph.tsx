import "./data-graph.scss";

export const DataGraph = () => {
  // return (
  //   <div>
  //     <div
  //       className="tableauPlaceholder"
  //       id="viz1582208602973"
  //       style={{ position: "relative" }}
  //     >
  //       <noscript>
  //         <a href="#">
  //           <img
  //             alt=" "
  //             src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Yo&#47;YourVisualization&#47;Dashboard1&#47;1_rss.png"
  //             style={{ border: "none" }}
  //           />
  //         </a>
  //       </noscript>
  //       <object className="tableauViz" style={{ display: "none" }}>
  //         <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
  //         <param name="embed_code_version" value="3" />
  //         <param name="site_root" value="" />
  //         <param name="name" value="YourVisualization/Dashboard1" />
  //         <param name="tabs" value="no" />
  //         <param name="toolbar" value="yes" />
  //         <param
  //           name="static_image"
  //           value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Yo&#47;YourVisualization&#47;Dashboard1&#47;1.png"
  //         />
  //         <param name="animate_transition" value="yes" />
  //         <param name="display_static_image" value="yes" />
  //         <param name="display_spinner" value="yes" />
  //         <param name="display_overlay" value="yes" />
  //         <param name="display_count" value="yes" />
  //       </object>
  //     </div>
  //     <script type="text/javascript">
  //       var divElement = document.getElementById('viz1582208602973'); var
  //       vizElement = divElement.getElementsByTagName('object')[0];
  //       vizElement.style.width = '100%'; vizElement.style.height =
  //       (divElement.offsetWidth * 0.75 ) + 'px'; var scriptElement =
  //       document.createElement('script'); scriptElement.src =
  //       'https://public.tableau.com/javascripts/api/viz_v1.js';
  //       vizElement.parentNode.insertBefore(scriptElement, vizElement ) ;
  //     </script>
  //   </div>
  // );

  /*  return (
    <div>
      <div
        className="piktowrapper-embed"
        data-uid="585b4a6ce668-create-your-own-chart-and-graph"
      />
      <script type="text/javascript">
        {(function (d) {
          let js,
            id = "pikto-embed-js",
            ref = d.getElementsByTagName("script")[0];
          if (d.getElementById(id)) {
            return;
          }
          js = d.createElement("script");
          js.id = id;
          js.async = true;
          js.src = "https://create.piktochart.com/assets/embedding/embed.js";
          ref.parentNode.insertBefore(js, ref);
        })(document)}
      </script>
    </div>
  );*/

  // return (
  //   <div className="data-graph">
  //     <iframe
  //       title="[ Insert title here ]"
  //       aria-label="Pie Chart"
  //       id="datawrapper-chart-nAEwD"
  //       src="https://datawrapper.dwcdn.net/nAEwD/2/"
  //       scrolling="no"
  //       frameBorder="0"
  //       height="527"
  //       data-external="1"
  //     ></iframe>
  //     <script type="text/javascript">
  //       !function()
  //       {window.addEventListener("message", function (a) {
  //         if (void 0 !== a.data["datawrapper-height"]) {
  //           let e = document.querySelectorAll("iframe");
  //           for (let t in a.data["datawrapper-height"])
  //             for (let r = 0; r < e.length; r++)
  //               if (e[r].contentWindow === a.source) {
  //                 let i = a.data["datawrapper-height"][t] + "px";
  //                 e[r].style.height = i;
  //               }
  //         }
  //       })}
  //       ();
  //     </script>
  //   </div>
  // );

  return (
    <div className="data-graph">
      <iframe
        className="data-graph-frame"
        width="100%"
        height="100%"
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQNqFypmwn7SPw2zqcTRjPIXgVQNp_badcwzu1jGZQZC2Um7MrgjyyQ8r8AhD4YdfyvRVF6sSDFPUle/pubchart?oid=1093564542&format=interactive"
        allowFullScreen
        sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      />
    </div>
  );
};

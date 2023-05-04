```
const map = new mapboxgl.Map({
            container: 'map',
            // Replace YOUR_STYLE_URL with your style URL.
            style: 'mapbox://styles/1063816178/clgvxrr3s008b01pgd2iz4icb',
            center: [120.12, 30.42],
            zoom: 3
        });
```

```
const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: {
                'version': 8,
                'sources': {
                    'raster-tiles': {
                        'type': 'raster',
                        'tiles': [],
                        'tileSize': 256,
                        'attribution':
                    }
                },
                'layers': [
                    {
                        'id': 'simple-tiles',
                        'type': 'raster',
                        'source': 'raster-tiles',
                        'minzoom': 0,
                        'maxzoom': 22
                    }
                ]
            },
            center: [-74.5, 40], // starting position
            zoom: 2 // starting zoom
        });
```





##### 步骤一：准备数据

```
1、登录 Mapbox Studio 并导航到数据集页面。
2、单击新建数据集按钮。
3、选择“新建数据集”模式右上角的“上传”选项。
4、选择下载的地理 JSON 文件。单击确认，然后单击创建。
```

发布初始地图

###### 关于数据集

```
您可以在数据集编辑器中编辑数据集要素和属性：

	要素是地图上的点、线和面。您可以使用绘制工具添加新要素，通过在地图上单击并拖动要素来编辑要素的位置或形状，或者通过单击要素并按删除键将其全部移除。您也可以在数据集编辑器中单击每个要素以查看其属性。
	属性可以是字符串、数字或布尔值。在您上传的示例数据集中，每个点都有具有唯一文本字符串的 and 属性。您可以在数据集编辑器中编辑属性、添加新属性或删除属性。确保在数据集编辑器中工作时，要在最终产品的弹出窗口中显示的任何内容都作为属性包含在内。titledescription
```

##### 步骤二：创建地图样式

###### 创建新样式

```
完成向 web 地图添加点后，第 1 部分：创建数据集，使用街道模板创建新样式。

在 Mapbox Studio 的“样式”页面上，单击“新建样式”按钮。找到街道模板样式，然后单击自定义街道。

样式编辑器将自动打开。使用屏幕左上角的标题字段将新样式重命名为“芝加哥公园”。
```

###### 创建新图层

```
Web 地图由地图切片组成。要将数据添加到 web 地图，Mapbox 会将其分割成切片，以便数据可以在各种缩放级别显示。Mapbox 将地图剪切成的图块集合称为图块集。在向 web 地图添加点，第 1 部分：创建数据集中，您将数据集转换为切片集以将其添加到新的地图样式中。

您将在此处将图块集添加为新图层：

1、当样式编辑器打开时，您将在左侧看到“组件”面板。单击图层选项卡。
2、单击图层选项卡左上角的 + 按钮。
3、在数据源列表中，找到芝加哥公园图块集，单击图块集的名称，然后单击显示的源图层以将其添加为图层的源。缩放至您的数据。
4、单击类型选项，然后选择符号图层选项，以便创建带有标记的图层。
5、单击返回到样式选项卡。
```

###### 设置符号图层样式

```
由于您选择了符号作为此图层的类型，因此您将设置符号图层的样式。您可以使用文本和图标设置符号图层的样式。

首先，上传您的自定义图标：

1、单击您在样式编辑器左侧的图层列表中创建的芝加哥公园图层。
2、当样式面板打开时，单击样式选项卡（如果尚未单击）。
3、选择图标选项卡，然后单击添加或删除图像。
4、这将打开顶部工具栏中的“图像”选项。
5、单击上传图像按钮，然后从文件中选择您在本教程开头下载的标记。

加载图标后，在芝加哥公园图层中使用它：

1.从列表中选择它。
2.如果要显示所有标记，即使它们重叠，请单击“放置”选项卡。向下滚动到“允许图标重叠”并将其设置为 。True
现在，您应该会看到标记图标出现在所有点上。
```

###### 发布您的样式

```
现在您已完成地图样式设置，您需要发布样式才能使这些更改在 Web 上生效。

1、单击编辑器右上角的发布按钮。
2、将弹出一个窗口，要求您查看更改。
3、单击“发布”。
```

###### 分享您的风格

```
共享模式包含在 Web 应用程序、移动应用程序或其他第三方工具中发布样式所需的资源。

单击样式编辑器右上角的共享。共享模式包含一个共享 URL，允许您与他人共享样式预览。模式还包含样式 URL 和访问令牌，本教程的第三部分中需要用到这两个令牌。
```

![1682407910502](C:\Users\10638\AppData\Roaming\Typora\typora-user-images\1682407910502.png)

##### 步骤三

###### 准备工作

```
在本教程中，您需要遵循一些资源：

映射框访问令牌。您必须使用令牌将地图与您的帐户关联。可以在访问令牌页上找到访问令牌。
开发环境。本教程需要编写代码。有关如何入门的提示，请参阅下面的准备编写代码。
“芝加哥公园”自定义地图样式。如果您已完成本教程系列的第 2 部分，则可以使用自己的样式，也可以使用包含 10 个芝加哥公园标记的示例样式：
复制
mapbox://styles/examples/clg45vm7400c501pfubolb0xz
```

###### 创建HTML文件

1. 打开文本编辑器并创建一个新的空白文件。
2. 复制下面的代码并将其粘贴到您的文件中。
3. 将文件另存为 .`index.html`

```
<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='utf-8' />
    <title>Points on a map</title>
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.js'></script>
    <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.css' rel='stylesheet' />
    <style>
      body { 
        margin: 0; 
        padding: 0; 
      }
      #map { 
        position: absolute; 
        top: 0; 
        bottom: 0; 
        width: 100%; 
      }
    </style>
  </head>
  <body>
    <div id='map'></div>
    <script>
    // The value for 'accessToken' begins with 'pk...'
    mapboxgl.accessToken = 'pk.eyJ1IjoiMTA2MzgxNjE3OCIsImEiOiJjbGc0Z3lreW8wZW5sM2ptMmVnaHh1bTY3In0.bJFydM2PKytPd7CsJjF36A'; 
    const map = new mapboxgl.Map({
      container: 'map',
      // Replace YOUR_STYLE_URL with your style URL.
      style: 'YOUR_STYLE_URL', 
      center: [-87.661557, 41.893748],
      zoom: 10.7
    });

    // Code from the next step will go here.

    </script>
  </body>
</html>
```

###### 初始化地图

```
要初始化地图以使其显示在网页上，必须在上一步中复制的代码中更改某些值。

4、将占位符字符串替换为“芝加哥公园”样式的样式 URL，如入门中所述。YOUR_STYLE_URL
5、检查 的值。如果您看到该字符串，请将其替换为您的 Mapbox 访问令牌，如入门中所述。mapboxgl.accessToken<your access token here>
6、保存文件并在 Web 浏览器中打开它。您应该会在浏览器窗口中看到一个显示标记的地图。index.html
```

###### 添加事件侦听器

在此步骤中，您将设置一个事件侦听器，当用户通过执行您指定的操作单击您的地图时，该侦听器将做出响应。

7.复制下面的代码，并将其粘贴到初始化块的右括号之后、结束标记之前 HTML 文件中。`);``Map``</script>`

8.在传递给 的选项参数中，将占位符字符串替换为包含“芝加哥公园”标记的地图样式中的图层名称。如果您已完成本教程系列的第 [1 部分](https://docs.mapbox.com/help/tutorials/add-points-pt-1/)，或者如果您使用的是上面[入门中提供](https://docs.mapbox.com/help/tutorials/#getting-started/)的示例样式 URL，则可能是这样。`queryRenderedFeatures``YOUR_LAYER_NAME``chicago-parks`

```
/* 
Add an event listener that runs
  when a user clicks on the map element.
*/
map.on('click', (event) => {
  // If the user clicked on one of your markers, get its information.
  const features = map.queryRenderedFeatures(event.point, {
    layers: ['YOUR_LAYER_NAME'] // replace with your layer name
  });
  if (!features.length) {
    return;
  }
  const feature = features[0];

  // Code from the next step will go here.
});
```

现在，当用户单击您的地图时，您的函数会将点击事件的属性传递给 Mapbox GL JS 方法 [`queryRenderedFeatures（），`](https://docs.mapbox.com/mapbox-gl-js/api/#map#queryrenderedfeatures)以检查点击是否发生在“芝加哥公园”图层中的某个标记上。如果是这样，您的函数将创建一个常量，以保存该特征的信息以供下一步使用。`point``feature`

###### 创建和添加弹出窗口

在此步骤中，您将向侦听器函数添加更多代码，以便当用户单击“芝加哥公园”标记时，其上方将显示一个弹出窗口。

9.复制下面的代码并将其粘贴到您在上一步中添加的函数的右括号之前。`}`

```
/* 
    Create a popup, specify its options 
    and properties, and add it to the map.
  */
const popup = new mapboxgl.Popup({ offset: [0, -15] })
  .setLngLat(feature.geometry.coordinates)
  .setHTML(
    `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
  )
  .addTo(map);
```

由于上述代码包含在事件侦听器的回调函数中，因此仅当用户单击地图时，它才会运行。该代码使用四种方法创建[`弹出窗口`](https://docs.mapbox.com/mapbox-gl-js/api/#popup)，定义其位置和内容，并将其添加到地图中：

- **地图盒。Popup（）** 创建一个新的弹出窗口并接受一个选项对象，您可以使用该对象来配置弹出窗口的行为。在此示例中，[`偏移`](https://docs.mapbox.com/mapbox-gl-js/api/markers/#popup-parameters)量调整弹出窗口锚点的垂直位置，以便弹出窗口不会覆盖其下方的标记。`{ offset: [0, -15] }`
- **Popup.setLngLat（）** 使用要素的属性设置弹出窗口定位点的地理位置。`coordinates`
- **Popup.setHTML（）** 将弹出窗口的内容设置为提供的字符串。虽然您可以提供任何字符串，但您通常会以字符串形式提供 HTML。上面的代码块将 HTML 代码与功能和属性相结合。`title``description`
- **Popup.addTo（map）** 将弹出窗口与您的地图相关联，以便在用户单击地图的其中一个标记时可以打开弹出窗口。

10.保存更改并在浏览器中刷新网页。单击标记以显示包含每个标记的标题和描述的弹出窗口。
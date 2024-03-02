import { Column } from "@bokehjs/api/models"
import { figure, show } from "@bokehjs/api/plotting"
import { ColumnDataSource } from "@bokehjs/models/sources"
import { Button } from "@bokehjs/models/widgets/button"


const source = new ColumnDataSource({data: { x: [0.1, 0.9], y: [0.1, 0.9] }})
//source.initialize()  // Uncomment this line to display a plot, but it cannot be zoomed
console.log("ColumnDataSource._select =", source._select)

const plot = figure({
    title: "Example BokehJS plot",
    height: 500,
    width: 500,
    x_range: [0, 1],
    y_range: [0, 1],
    sizing_mode: "stretch_width",
})

const circle = plot.scatter({ field: "x" }, { field: "y" }, {source, size: 10})

function callback() {
    const data = source.data as any
    data.x.push(Math.random());
    data.y.push(Math.random());
    source.change.emit()
}

const button = new Button({label: "Click me to add a point", button_type: "primary"})
button.on_click(callback)

const column = new Column({children: [plot, button], sizing_mode: "stretch_width"})
show(column, "#target")

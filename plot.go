package main
 
import "github.com/Arafatk/glot"
 
func main() {
    dimensions := 2
    persist := false
    debug := false
    plot, _ := glot.NewPlot(dimensions, persist, debug)
    pointGroupName := "Simple Points"
    style := "points" // circle
    points := [][]float64{{7, 3, 13, 5.6, 11.1, 1, 1}, {12, 13, 11, 1,  7, 2, 1}}
        plot.AddPointGroup(pointGroupName, style, points)
    plot.SetTitle("Example Plot")
    plot.SetXLabel("X-Axis")
    plot.SetYLabel("Y-Axis")
    plot.SetXrange(-2, 18)
    plot.SetYrange(-2, 18)
    plot.SavePlot("1.png")
}

// go mod init plot.go
// go get github.com/Arafatk/glot
// go run plot.go
// go build plot.go && ./plot
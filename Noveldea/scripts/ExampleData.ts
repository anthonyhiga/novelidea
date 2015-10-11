/**
 *  Copyright: Third Party Software 2015(c)
 */
import dm = require("./DataModel");

export module ExampleData {
    export function getChapters(): dm.DataModel.Chapter[] {
        var builder: dm.DataModel.ChapterBuilder = new dm.DataModel.ChapterBuilder();
        return [
            builder.title("hello world").description("RAIN!!!!").id("my id").build(),
            builder.title("goodbye world").description("THUNDER!!!!").id("my id2").build(),
        ];
    }
}
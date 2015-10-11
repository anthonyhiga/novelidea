/**
 *  Copyright: Third Party Software 2015(c)
 */
import dm = require("./DataModel");

export module Provider {
    export function initialize() {
        ChapterProvider.singleton = new ChapterProvider();
    }

    export class BaseProvider<T> {
        private cache = {};

        public get(id: string): T {
            return <T> this.cache[id];
        }

        public put(value: dm.DataModel.Entity) {
            return this.cache[value.id] = value;
        }

        public list(sortBy: string, acending: boolean): T[] {
            var result: T[] = [];
            for (var id in this.cache) {
                result.push(this.cache[id]);
            }
            return result;
        }
    }

    export class ChapterProvider extends BaseProvider<dm.DataModel.Chapter> {
        static singleton: ChapterProvider;

        constructor() {
            super();
            var builder: dm.DataModel.ChapterBuilder = new dm.DataModel.ChapterBuilder();
            this.put(builder.title("hello world").description("RAIN!!!!").build());
            this.put(builder.title("goodbye world").description("FAV!!!!").build());
        }
    }
}
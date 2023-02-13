<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <div class="es-sdk-content-row-css">
        <text text="Boolean:"></text>
        <text :text="booleanValue"></text>
        <text text="Int:"></text>
        <text :text="intValue"></text>
        <text text="Long:"></text>
        <text :text="longValue"></text>
        <text text="String:"></text>
        <text :text="stringValue"></text>
        <text text="Array:"></text>
        <text :text="arrayValue"></text>
        <text text="Map:"></text>
        <text :text="mapValue"></text>
      </div>
      <div class="es-sdk-content-divider-css"/>
      <div class="es-sdk-content-row-css">
        <text-button text="getBoolean" @onButtonClicked="onGetBooleanButtonClicked"/>
        <text-button text="getInt" @onButtonClicked="onGetIntButtonClicked"/>
        <text-button text="getLong" @onButtonClicked="onGetLongButtonClicked"/>
        <text-button text="getString" @onButtonClicked="onGetStringButtonClicked"/>
        <text-button text="getArray" @onButtonClicked="onGetArrayButtonClicked"/>
        <text-button text="getMap" @onButtonClicked="onGetMapButtonClicked"/>
      </div>
      <div class="es-sdk-content-row-css">
        <text-button text="putBoolean" @onButtonClicked="onPutBooleanButtonClicked"/>
        <text-button text="putInt" @onButtonClicked="onPutIntButtonClicked"/>
        <text-button text="putLong" @onButtonClicked="onPutLongButtonClicked"/>
        <text-button text="putString" @onButtonClicked="onPutStringButtonClicked"/>
        <text-button text="putArray" @onButtonClicked="onPutArrayButtonClicked"/>
        <text-button text="putMap" @onButtonClicked="onPutMapButtonClicked"/>
      </div>
      <div class="es-sdk-content-divider-css"/>
      <div class="es-sdk-content-row-css">
        <text text="SharedBoolean:"></text>
        <text :text="booleanSharedValue"></text>
        <text text="SharedInt:"></text>
        <text :text="intSharedValue"></text>
        <text text="SharedLong:"></text>
        <text :text="longSharedValue"></text>
        <text text="SharedString:"></text>
        <text :text="stringSharedValue"></text>
        <text text="SharedArray:"></text>
        <text :text="arraySharedValue"></text>
        <text text="SharedMap:"></text>
        <text :text="mapSharedValue"></text>
      </div>
      <div class="es-sdk-content-divider-css"/>
      <div class="es-sdk-content-row-css">
        <text-button text="getSharedBoolean" @onButtonClicked="onGetSharedBooleanButtonClicked"/>
        <text-button text="getSharedInt" @onButtonClicked="onGetSharedIntButtonClicked"/>
        <text-button text="getSharedLong" @onButtonClicked="onGetSharedLongButtonClicked"/>
        <text-button text="getSharedString" @onButtonClicked="onGetSharedStringButtonClicked"/>
        <text-button text="getSharedArray" @onButtonClicked="onGetSharedArrayButtonClicked"/>
        <text-button text="getSharedMap" @onButtonClicked="onGetSharedMapButtonClicked"/>
      </div>
      <div class="es-sdk-content-row-css">
        <text-button text="putSharedBoolean" @onButtonClicked="onPutSharedBooleanButtonClicked"/>
        <text-button text="putSharedInt" @onButtonClicked="onPutSharedIntButtonClicked"/>
        <text-button text="putSharedLong" @onButtonClicked="onPutSharedLongButtonClicked"/>
        <text-button text="putSharedString" @onButtonClicked="onPutSharedStringButtonClicked"/>
        <text-button text="putSharedArray" @onButtonClicked="onPutSharedArrayButtonClicked"/>
        <text-button text="putSharedMap" @onButtonClicked="onPutSharedMapButtonClicked"/>
      </div>
    </div>
  </div>
</template>

<script>
import {ESPage, ESToast} from "@extscreen/es-core";
import {ESGroupDataManager} from "@extscreen/es-group-data";

export default {
  name: '共享数据测试一',
  mixins: [ESPage],
  data() {
    return {
      booleanValue: false,
      intValue: 0,
      longValue: 0,
      stringValue: '',
      arrayValue: [],
      mapValue: {},

      booleanSharedValue: false,
      intSharedValue: 0,
      longSharedValue: 0,
      stringSharedValue: '',
      arraySharedValue: [],
      mapSharedValue: {},

      secretKey: "22222222",

      params: {
        packageName: "es.test.data.shared.one",
        secretKey: '111111111',
      },
    };
  },
  methods: {
    onESCreate(params) {
      ESGroupDataManager.init().then(() => {
        },
        error => {
        })
    },
    //--------------------------------------------------------------------------------------
    onGetBooleanButtonClicked() {
      ESGroupDataManager.getBoolean("booleanKey", false)
        .then(value => {
            this.booleanValue = value;
            ESToast.showToast("getBoolean:" + value);
          },
          error => {
            ESToast.showToast("getBoolean error");
          }
        );
    },
    onGetIntButtonClicked() {
      ESGroupDataManager.getInt("intKey", 0)
        .then(value => {
            this.intValue = value;
            ESToast.showToast("getInt:" + value);
          },
          error => {
            ESToast.showToast("getInt error");
          }
        );
    },
    onGetLongButtonClicked() {
      ESGroupDataManager.getLong("longKey", 0)
        .then(value => {
            this.longValue = value;
            ESToast.showToast("getLong:" + value);
          },
          error => {
            ESToast.showToast("getLong error");
          }
        );
    },
    onGetStringButtonClicked() {
      ESGroupDataManager.getString("stringKey", "")
        .then(value => {
            this.stringValue = value;
            ESToast.showToast("getString:" + value);
          },
          error => {
            ESToast.showToast("getString error");
          }
        );
    },
    onGetArrayButtonClicked() {
      ESGroupDataManager.getArray("arrayKey", [])
        .then(value => {
            ESToast.showToast("getArray:" + value);
            this.arrayValue = value;
          },
          error => {
            ESToast.showToast("getArray error");
          }
        );
    },
    onGetMapButtonClicked() {
      ESGroupDataManager.getMap("mapKey", {})
        .then(value => {
            this.mapValue = value;
          },
          error => {

          }
        );
    },
    //--------------------------------------------------------------------------------------
    onPutBooleanButtonClicked() {
      ESGroupDataManager.putBoolean(this.secretKey, "booleanKey", true, 2)
        .then(value => {
            ESToast.showToast("putBoolean success");
          },
          error => {
            ESToast.showToast("putBoolean error");
          }
        );
    },
    onPutIntButtonClicked() {
      ESGroupDataManager.putInt(this.secretKey, "intKey", 11, 2)
        .then(value => {
            ESToast.showToast("putInt success");
          },
          error => {
            ESToast.showToast("putInt error");
          }
        );
    },
    onPutLongButtonClicked() {
      ESGroupDataManager.putLong(this.secretKey, "longKey", 11, 2)
        .then(value => {
            ESToast.showToast("putLong success");
          },
          error => {
            ESToast.showToast("putLong error");
          }
        );
    },
    onPutStringButtonClicked() {
      ESGroupDataManager.putString(this.secretKey, "stringKey", "11", 2)
        .then(value => {
            ESToast.showToast("putString success");
          },
          error => {
            ESToast.showToast("putString error");
          }
        );
    },
    onPutArrayButtonClicked() {
      ESGroupDataManager.putArray(this.secretKey, "arrayKey", [11], 1)
        .then(value => {
            ESToast.showToast("putArray success");
          },
          error => {
            ESToast.showToast("putArray error");
          }
        );
    },
    onPutMapButtonClicked() {
      ESGroupDataManager.putMap(this.secretKey, "mapKey", {mapIntKey: 11}
        , 1)
        .then(value => {
            ESToast.showToast("putMap success");
          },
          error => {
            ESToast.showToast("putMap error");
          }
        );
    },
    //-----------------------------------------------------------------
    onGetSharedBooleanButtonClicked() {
      ESGroupDataManager.getSharedBoolean(this.params, "booleanKey", false)
        .then(value => {
            this.booleanSharedValue = value;
          },
          error => {

          }
        );
    },
    onGetSharedIntButtonClicked() {
      ESGroupDataManager.getSharedInt(this.params, "intKey", 0)
        .then(value => {
            this.intSharedValue = value;
          },
          error => {

          }
        );
    },
    onGetSharedLongButtonClicked() {
      ESGroupDataManager.getSharedLong(this.params, "longKey", 0)
        .then(value => {
            this.longSharedValue = value;
          },
          error => {

          }
        );
    },
    onGetSharedStringButtonClicked() {
      ESGroupDataManager.getSharedString(this.params, "stringKey", "")
        .then(value => {
            this.stringSharedValue = value;
          },
          error => {

          }
        );
    },
    onGetSharedArrayButtonClicked() {
      ESGroupDataManager.getSharedArray(this.params, "arrayKey", [])
        .then(value => {
            this.arraySharedValue = value;
          },
          error => {

          }
        );
    },
    onGetSharedMapButtonClicked() {
      ESGroupDataManager.getSharedMap(this.params, "mapKey", {})
        .then(value => {
            this.mapSharedValue = value;
          },
          error => {

          }
        );
    },
    //--------------------------------------------------------------------------------------
    onPutSharedBooleanButtonClicked() {
      ESGroupDataManager.putSharedBoolean(this.params, "booleanKey", false)
        .then(value => {
            ESToast.showToast("putSharedBoolean success");
          },
          error => {
            ESToast.showToast("putSharedBoolean error");
          }
        );

    },
    onPutSharedIntButtonClicked() {
      ESGroupDataManager.putSharedInt(this.params, "intKey", 11)
        .then(value => {
            ESToast.showToast("putSharedInt success");
          },
          error => {
            ESToast.showToast("putSharedInt error");
          }
        );
    },
    onPutSharedLongButtonClicked() {
      ESGroupDataManager.putSharedLong(this.params, "longKey", 11)
        .then(value => {
            ESToast.showToast("putSharedLong success");
          },
          error => {
            ESToast.showToast("putSharedLong error");
          }
        );
    },
    onPutSharedStringButtonClicked() {
      ESGroupDataManager.putSharedString(this.params, "stringKey", "11")
        .then(value => {
            ESToast.showToast("putSharedString success");
          },
          error => {
            ESToast.showToast("putSharedString error");
          }
        );
    },
    onPutSharedArrayButtonClicked() {
      ESGroupDataManager.putSharedArray(this.params, "arrayKey", [11])
        .then(value => {
            ESToast.showToast("putSharedArray success");
          },
          error => {
            ESToast.showToast("putSharedArray error");
          }
        );
    },
    onPutSharedMapButtonClicked() {
      ESGroupDataManager.putSharedMap(this.params, "mapKey", {intKey: 11})
        .then(value => {
            ESToast.showToast("putSharedMap success");
          },
          error => {
            ESToast.showToast("putSharedMap error");
          }
        );
    },
  }
};
</script>

<style>
</style>

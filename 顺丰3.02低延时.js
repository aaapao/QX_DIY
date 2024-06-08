console.log("调低延时到1.5秒，黑号勿扰！");
console.log("调低延时到1.5秒，黑号勿扰！");
console.log("调低延时到1.5秒，黑号勿扰！");
console.log("调低延时到1.5秒，黑号勿扰！");
const _0x469c15 = _0x5481f1("顺丰速运"),
      _0x4ace5a = require("got"),
      _0x49475b = require("path"),
      {
  exec: _0x18fa00
} = require("child_process"),
      _0xd17b69 = require("crypto-js"),
      {
  CookieJar: _0x5007f1
} = require("tough-cookie"),
      _0x1a4c8b = "sfsy",
      _0x15b57d = /[&]/,
      _0x49ab33 = [_0x1a4c8b + "Url"],
      _0x2f8052 = process.env[_0x1a4c8b + "Bee"] || "false",
      _0x2a3ba2 = 8000,
      _0x26eb8f = 3;

const _0x56c444 = 3.02,
      _0x3a9229 = "sfsy",
      _0x5c3b1f = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
      _0x4640ec = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/" + _0x3a9229 + ".json",
      _0x23be14 = 5,
      _0x530548 = "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
      _0x286e40 = "wwesldfs29aniversaryvdld29",
      _0x150b01 = "MCS-MIMP-CORE",
      _0x32c305 = "czflqdlhbxcx",
      _0x40dfe9 = "wxwd26mem1",
      _0x21e6a = {
  BAOZHU_CARD: "[爆竹卡]",
  CHUNLIAN_CARD: "[春联卡]",
  DENGLONG_CARD: "[灯笼卡]",
  HONGBAO_CARD: "[红包卡]",
  YUANXIAO_CARD: "[元宵卡]",
  CHUANGHUA_CARD: "[窗花卡]",
  COMMON_CARD: "[万能卡]"
};

const _0x10e192 = {
  PUSH_TIMES: "推金币次数",
  COIN: "金币",
  WELFARE_CARD: "财富卡",
  RICH_CARD_GAME: "发财卡"
};

const _0x48878a = "YEAR_END_2023",
      _0x3e39ad = "ANNIVERSARY_2024",
      _0x3d074d = "MEMBER_DAY",
      _0x4b8b7f = "DRAGONBOAT_2024",
      _0x186c1f = 8,
      _0x43c23b = 1 << _0x186c1f - 1,
      _0x3a8efd = ["完成连签7天", "参与积分活动", "每月累计寄件", "完成每月任务", "与好友微信分享会员福利", "DAILY_VIP_TASK_TYPE", "去新增一个收件偏好", "用行业模板寄件下单"];

let _0xa04af7 = [],
    _0x10eea9 = {},
    _0x1d614b = 0,
    _0x55aa6c = 0;

function _0x3aa1e0() {
  _0x55aa6c = 1;
  process.on("SIGTERM", () => {
    _0x55aa6c = 2;
    process.exit(0);
  });

  const _0x535e3f = _0x49475b.basename(process.argv[1]),
        _0x219438 = ["bash", "timeout", "grep"];

  let _0x56d4d9 = ["ps afx"];

  _0x56d4d9.push("grep " + _0x535e3f);

  _0x56d4d9 = _0x56d4d9.concat(_0x219438.map(_0x3e8c43 => "grep -v \"" + _0x3e8c43 + " \""));

  _0x56d4d9.push("wc -l");

  const _0x3d68cc = _0x56d4d9.join("|"),
        _0x409574 = () => {
    _0x18fa00(_0x3d68cc, (_0x388337, _0x3727d8, _0x2e19df) => {
      if (_0x388337 || _0x2e19df) {
        return;
      }

      _0x1d614b = parseInt(_0x3727d8.trim(), 10);
    });

    if (_0x55aa6c == 1) {
      setTimeout(_0x409574, 2000);
    }
  };

  _0x409574();
}

class _0x25c6d0 {
  constructor() {
    this.index = _0x469c15.userIdx++;
    this.name = "";
    this.valid = false;
    const _0x18014e = {
      limit: 0
    };
    const _0x1c3aeb = {
      Connection: "keep-alive"
    };
    const _0x14d372 = {
      retry: _0x18014e,
      timeout: _0x2a3ba2,
      followRedirect: false,
      ignoreInvalidCookies: true,
      headers: _0x1c3aeb
    };
    this.got = _0x4ace5a.extend(_0x14d372);

    if (_0x55aa6c == 0) {
      _0x3aa1e0();
    }
  }

  log(_0x12d104, _0x11d9c9 = {}) {
    var _0x1e75cb = "",
        _0x197f33 = _0x469c15.userCount.toString().length;

    if (this.index) {
      _0x1e75cb += "账号[" + _0x469c15.padStr(this.index, _0x197f33) + "]";
    }

    if (this.name) {
      _0x1e75cb += "[" + this.name + "]";
    }

    _0x469c15.log(_0x1e75cb + _0x12d104, _0x11d9c9);
  }

  set_cookie(_0x6e743c, _0x4cb300, _0x5e459f, _0x3a3d3a, _0x4afccd = {}) {
    this.cookieJar.setCookieSync(_0x6e743c + "=" + _0x4cb300 + "; Domain=" + _0x5e459f + ";", "" + _0x3a3d3a);
  }

  async request(_0x39f347) {
    const _0x303f97 = ["ECONNRESET", "EADDRINUSE", "ENOTFOUND", "EAI_AGAIN"],
          _0xf6fe3c = ["TimeoutError"],
          _0x2895cb = ["EPROTO"],
          _0x118b33 = [];

    var _0x511a05 = null,
        _0x4a016c = 0,
        _0x588ba8 = _0x39f347.fn || _0x39f347.url;

    let _0x4a0d10 = _0x469c15.get(_0x39f347, "valid_code", _0x118b33);

    _0x39f347.method = _0x39f347?.["method"]?.["toUpperCase"]() || "GET";

    let _0x3bea1e, _0x532e4e;

    while (_0x4a016c < _0x26eb8f) {
      try {
        _0x4a016c++;
        _0x3bea1e = "";
        _0x532e4e = "";

        let _0x3836bf = null,
            _0x58625b = _0x39f347?.["timeout"] || this.got?.["defaults"]?.["options"]?.["timeout"]?.["request"] || _0x2a3ba2,
            _0x3b92fb = false,
            _0x321f93 = Math.max(this.index - 2, 0),
            _0x5ca85e = Math.min(Math.max(this.index - 3, 1), 6),
            _0x3314fa = Math.min(Math.max(this.index - 4, 1), 7),
            _0x2f88d3 = _0x321f93 * _0x5ca85e * _0x3314fa * 400,
            _0x4615b6 = _0x321f93 * _0x5ca85e * _0x3314fa * 1800,
            _0xd1bbca = _0x2f88d3 + Math.floor(Math.random() * _0x4615b6),
            _0x1f94bd = _0x1d614b * (_0x1d614b - 1) * 2000,
            _0x297793 = (_0x1d614b - 1) * (_0x1d614b - 1) * 2000,
            _0x1cda11 = _0x1f94bd + Math.floor(Math.random() * _0x297793),
            _0x12dea1 = Math.max(_0x469c15.userCount - 2, 0),
            _0x46e0e2 = Math.max(_0x469c15.userCount - 3, 0),
            _0x1f0318 = _0x12dea1 * 200,
            _0x54b6b3 = _0x46e0e2 * 400,
            _0x38a68c = _0x1f0318 + Math.floor(Math.random() * _0x54b6b3),
            _0x28db4d = _0xd1bbca + _0x1cda11 + _0x38a68c;

        await _0x469c15.wait(_0x28db4d);
        await new Promise(async _0x4d6ff9 => {
          setTimeout(() => {
            _0x3b92fb = true;

            _0x4d6ff9();
          }, _0x58625b);
          await this.got(_0x39f347).then(_0xbe588e => {
            _0x511a05 = _0xbe588e;
          }, _0x206cdd => {
            _0x3836bf = _0x206cdd;
            _0x511a05 = _0x206cdd.response;
            _0x3bea1e = _0x3836bf?.["code"] || "";
            _0x532e4e = _0x3836bf?.["name"] || "";
          });

          _0x4d6ff9();
        });

        if (_0x3b92fb) {
          this.log("[" + _0x588ba8 + "]请求超时(" + _0x58625b / 1000 + "秒)，重试第" + _0x4a016c + "次");
        } else {
          if (_0x2895cb.includes(_0x3bea1e)) {
            this.log("[" + _0x588ba8 + "]请求错误[" + _0x3bea1e + "][" + _0x532e4e + "]");

            if (_0x3836bf?.["message"]) {
              console.log(_0x3836bf.message);
            }

            break;
          } else {
            if (_0xf6fe3c.includes(_0x532e4e)) {
              this.log("[" + _0x588ba8 + "]请求错误[" + _0x3bea1e + "][" + _0x532e4e + "]，重试第" + _0x4a016c + "次");
            } else {
              if (_0x303f97.includes(_0x3bea1e)) {
                this.log("[" + _0x588ba8 + "]请求错误[" + _0x3bea1e + "][" + _0x532e4e + "]，重试第" + _0x4a016c + "次");
              } else {
                let _0x1d0418 = _0x511a05?.["statusCode"] || "",
                    _0xf644f8 = _0x1d0418 / 100 | 0;

                if (_0x1d0418) {
                  _0xf644f8 > 3 && !_0x4a0d10.includes(_0x1d0418) && (_0x1d0418 ? this.log("请求[" + _0x588ba8 + "]返回[" + _0x1d0418 + "]") : this.log("请求[" + _0x588ba8 + "]错误[" + _0x3bea1e + "][" + _0x532e4e + "]"));

                  if (_0xf644f8 <= 4) {
                    break;
                  }
                } else {
                  this.log("请求[" + _0x588ba8 + "]错误[" + _0x3bea1e + "][" + _0x532e4e + "]");
                }
              }
            }
          }
        }
      } catch (_0x443166) {
        _0x443166.name == "TimeoutError" ? this.log("[" + _0x588ba8 + "]请求超时，重试第" + _0x4a016c + "次") : this.log("[" + _0x588ba8 + "]请求错误(" + _0x443166.message + ")，重试第" + _0x4a016c + "次");
      }
    }

    if (_0x511a05 == null) {
      return Promise.resolve({
        statusCode: _0x3bea1e || -1,
        headers: null,
        result: null
      });
    }

    let {
      statusCode: _0x26a838,
      headers: _0x271c04,
      body: _0x5ad1b2
    } = _0x511a05;

    if (_0x5ad1b2) {
      try {
        _0x5ad1b2 = JSON.parse(_0x5ad1b2);
      } catch {}
    }

    const _0x2b3bd5 = {
      statusCode: _0x26a838,
      headers: _0x271c04,
      result: _0x5ad1b2
    };
    return Promise.resolve(_0x2b3bd5);
  }

}

let _0x13b599 = _0x25c6d0;

try {
  let _0x20b117 = require("./LocalBasic");

  _0x13b599 = _0x20b117;
} catch {}

let _0x58d260 = new _0x13b599(_0x469c15);

class _0x572068 extends _0x13b599 {
  constructor(_0x9d19e5) {
    super(_0x469c15);
    this.refreshUrl = _0x9d19e5;
    this.cookieJar = new _0x5007f1();
    this.deviceId = _0x469c15.randomPattern("xxxxxxxx-xxxx-xxxx");
    this.jika_black = false;
    this.anniversary_black = false;
    this.dragonBoat_black = false;
    this.memberDay_black = false;
    this.memberDay_redPacket_drewToday = false;
    this.memberDay_redPacket_map = {};
    const _0x1110c5 = {
      "User-Agent": _0x530548
    };
    this.got = this.got.extend({
      cookieJar: this.cookieJar,
      headers: _0x1110c5
    });
  }

  getSign(_0x429835 = {}) {
    let _0x3bf13f = Date.now(),
        _0x2201a8 = "token=" + _0x286e40 + "&timestamp=" + _0x3bf13f + "&sysCode=" + _0x150b01,
        _0x5b96d5 = _0xd17b69.MD5(_0x2201a8).toString();

    const _0x25723e = {
      platform: "MINI_PROGRAM",
      channel: _0x40dfe9,
      sysCode: _0x150b01,
      timestamp: _0x3bf13f,
      signature: _0x5b96d5
    };
    return _0x25723e;
  }

  async refresh_cookie(_0x54692f = {}) {
    let _0x462fd5 = false;

    try {
      const _0x38d4c0 = {
        fn: "refresh_cookie",
        method: "get",
        url: this.refreshUrl
      };
      let {
        statusCode: _0x5fc31c,
        headers: _0x5461b3
      } = await this.request(_0x38d4c0);

      if (_0x5fc31c == 302) {
        for (let _0x2748ac of _0x5461b3["set-cookie"]) {
          if (_0x2748ac.includes("_login_mobile_")) {
            let _0x301414 = _0x2748ac.match(/_login_mobile_=(\d+);/);

            _0x301414 && (this.name = _0x301414[1]);
            break;
          }
        }

        _0x462fd5 = true;
        this.log("登录成功");
      } else {
        this.log("登录失败[" + _0x5fc31c + "]");
      }
    } catch (_0x59e911) {
      console.log(_0x59e911);
    } finally {
      return _0x462fd5;
    }
  }

  async personalInfo(_0x254511 = {}) {
    try {
      let _0x386734 = {
        fn: "personalInfo",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/member/personalInfo",
        headers: { ...this.getSign()
        },
        json: {}
      },
          {
        result: _0x1abc20
      } = await this.request(_0x386734);

      if (_0x1abc20?.["success"]) {
        const _0x55eb4d = {
          notify: true
        };
        this.log("积分: " + _0x1abc20.obj.availablePoints, _0x55eb4d);
      } else {
        this.log("查询账号信息失败: " + (_0x1abc20?.["errorMessage"] || (_0x1abc20 ? JSON.stringify(_0x1abc20) : "无返回")));
      }
    } catch (_0x363b43) {
      console.log(_0x363b43);
    }
  }

  async queryUserInfo(_0x108123 = {}) {
    try {
      let _0x381afe = {
        fn: "queryUserInfo",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberIntegral~userInfoService~queryUserInfo",
        headers: { ...this.getSign()
        },
        json: {
          sysCode: "ESG-CEMP-CORE",
          optionalColumns: ["usablePoint", "cycleSub", "leavePoint"],
          token: "zeTLTYeG0bLetfRk"
        }
      },
          {
        result: _0x14a286
      } = await this.request(_0x381afe);

      if (_0x14a286?.["success"]) {
        let {
          usablePoint: _0x7af2c4,
          cycleAdd: _0x103dbf,
          cycleSub: _0x4c6c46,
          leavePoint: _0x140e01,
          pointClearCycle: _0x13f021
        } = _0x14a286.obj,
            _0x143ad2 = "积分: " + _0x7af2c4,
            _0xd25b16 = _0x140e01 - _0x4c6c46,
            _0x33d09e = new Date(_0x13f021 + " 00:00:00");

        _0x33d09e.setFullYear(_0x33d09e.getFullYear() + 1);

        let _0x10933a = _0x33d09e.getTime();

        if (_0xd25b16 > 0 && _0x10933a > Date.now()) {
          let _0x53b80d = _0x469c15.time("yyyy-MM-dd", _0x10933a);

          _0x143ad2 += ", 有" + _0xd25b16 + "积分将在" + _0x53b80d + "过期";
        }

        const _0x42cde6 = {
          notify: true
        };
        this.log(_0x143ad2, _0x42cde6);
      } else {
        this.log("查询账号信息失败: " + (_0x14a286?.["errorMessage"] || (_0x14a286 ? JSON.stringify(_0x14a286) : "无返回")));
      }
    } catch (_0x14ff42) {
      console.log(_0x14ff42);
    }
  }

  async automaticSignFetchPackage(_0x503c1c = {}) {
    try {
      let _0x44a7c9 = {
        fn: "automaticSignFetchPackage",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~integralTaskSignPlusService~automaticSignFetchPackage",
        headers: { ...this.getSign()
        },
        json: {
          comeFrom: _0x469c15.get(_0x503c1c, "comeFrom", "vioin"),
          channelFrom: _0x469c15.get(_0x503c1c, "channelFrom", "SFAPP")
        }
      },
          {
        result: _0x25eff8
      } = await this.request(_0x44a7c9);

      if (_0x25eff8?.["success"]) {
        _0x25eff8?.["obj"]?.["hasFinishSign"] ? this.log("今天已签到") : _0x25eff8?.["obj"]?.["integralTaskSignPackageVOList"]?.["length"] && this.log("签到获得: " + _0x25eff8?.["obj"]?.["integralTaskSignPackageVOList"]?.["map"](_0xf37ba1 => _0xf37ba1.packetName)?.["join"](", "));
        await this.queryPointTaskAndSignFromES();
        const _0x53e067 = {
          channelType: 3
        };
        await this.queryPointTaskAndSignFromES(_0x53e067);
        await this.queryUserInfo();
      } else {
        this.log("查询签到失败: " + (_0x25eff8?.["errorMessage"] || (_0x25eff8 ? JSON.stringify(_0x25eff8) : "无返回")));
      }
    } catch (_0x502d9e) {
      console.log(_0x502d9e);
    }
  }

  async queryPointTaskAndSignFromES(_0x2e7b00 = {}) {
    try {
      let _0xc6fe7d = {
        fn: "queryPointTaskAndSignFromES",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~integralTaskStrategyService~queryPointTaskAndSignFromES",
        headers: { ...this.getSign()
        },
        json: {
          deviceId: this.deviceId,
          channelType: String(_0x469c15.get(_0x2e7b00, "channelType", 1))
        }
      },
          {
        result: _0x4b2cca
      } = await this.request(_0xc6fe7d);

      if (_0x4b2cca?.["success"]) {
        for (let _0x1be96b of _0x4b2cca.obj.taskTitleLevels) {
          switch (_0x1be96b.status) {
            case 2:
              if (_0x3a8efd.includes(_0x1be96b.title)) {
                break;
              }

              await this.finishTask(_0x1be96b);

            case 1:
              await this.fetchIntegral(_0x1be96b);
              break;

            case 3:
              break;

            default:
              this.log("任务[" + _0x1be96b.title + "] -- 未知状态[" + _0x1be96b.status + "]");
              break;
          }
        }
      } else {
        this.log("查询任务失败: " + (_0x4b2cca?.["errorMessage"] || (_0x4b2cca ? JSON.stringify(_0x4b2cca) : "无返回")));
      }
    } catch (_0x42e1fc) {
      console.log(_0x42e1fc);
    }
  }

  async finishTask(_0x214929, _0x4deee6 = {}) {
    try {
      const _0x349a95 = {
        taskCode: _0x214929.taskCode
      };
      let _0x2bb243 = {
        fn: "finishTask",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonRoutePost/memberEs/taskRecord/finishTask",
        headers: { ...this.getSign()
        },
        json: _0x349a95
      },
          {
        result: _0x368b27
      } = await this.request(_0x2bb243);
      _0x368b27?.["success"] ? this.log("完成任务[" + _0x214929.title + "]成功") : this.log("完成任务[" + _0x214929.title + "]失败: " + (_0x368b27?.["errorMessage"] || (_0x368b27 ? JSON.stringify(_0x368b27) : "无返回")));
    } catch (_0x91cf15) {
      console.log(_0x91cf15);
    }
  }

  async fetchIntegral(_0x493299, _0x15c762 = {}) {
    try {
      let _0x2c9d5e = {
        fn: "fetchIntegral",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~integralTaskStrategyService~fetchIntegral",
        headers: { ...this.getSign()
        },
        json: {
          strategyId: _0x493299.strategyId,
          taskId: _0x493299.taskId,
          taskCode: _0x493299.taskCode,
          deviceId: this.deviceId
        }
      },
          {
        result: _0x49293a
      } = await this.request(_0x2c9d5e);
      _0x49293a?.["success"] ? this.log("领取任务[" + _0x493299.title + "]奖励: " + _0x49293a.obj.point + "积分") : this.log("领取任务[" + _0x493299.title + "]奖励失败: " + (_0x49293a?.["errorMessage"] || (_0x49293a ? JSON.stringify(_0x49293a) : "无返回")));
    } catch (_0x7fab22) {
      console.log(_0x7fab22);
    }
  }

  async queryPointTaskAndSign(_0x9e2b45 = {}) {
    try {
      let _0xee776b = {
        fn: "queryPointTaskAndSign",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/appTask/queryPointTaskAndSign",
        headers: { ...this.getSign()
        },
        json: {
          channel: _0x469c15.get(_0x9e2b45, "channel", "SFAPP"),
          pageType: _0x469c15.get(_0x9e2b45, "pageType", "APP_MINE_TASK")
        }
      },
          {
        result: _0x21efbb
      } = await this.request(_0xee776b);

      if (_0x21efbb?.["success"]) {
        for (let _0x25f5a2 of _0x21efbb?.["obj"]?.["taskTitleLevels"] || []) {
          if (_0x3a8efd.includes(_0x25f5a2.title)) {
            continue;
          }

          await this.scanPageToRecord(_0x25f5a2);
          await this.fetchPoint(_0x25f5a2);
        }
      } else {
        this.log("查询旧版任务失败: " + (_0x21efbb?.["errorMessage"] || (_0x21efbb ? JSON.stringify(_0x21efbb) : "无返回")));
      }
    } catch (_0x24ebcb) {
      console.log(_0x24ebcb);
    }
  }

  async scanPageToRecord(_0x3b2067, _0x572fc3 = {}) {
    try {
      let _0x38a151 = {
        fn: "scanPageToRecord",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/appTask/scanPageToRecord",
        headers: { ...this.getSign()
        },
        json: {
          channel: _0x469c15.get(_0x572fc3, "channel", "SFAPP"),
          pageType: _0x3b2067.pageType
        }
      },
          {
        result: _0x8ded37
      } = await this.request(_0x38a151);
      _0x8ded37?.["success"] ? this.log("完成任务[" + _0x3b2067.title + "]成功") : this.log("完成任务[" + _0x3b2067.title + "]失败: " + (_0x8ded37?.["errorMessage"] || (_0x8ded37 ? JSON.stringify(_0x8ded37) : "无返回")));
    } catch (_0x26f34d) {
      console.log(_0x26f34d);
    }
  }

  async fetchPoint(_0x38a0e2, _0x148548 = {}) {
    try {
      let _0x512e57 = {
        fn: "fetchPoint",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/appTask/fetchPoint",
        headers: { ...this.getSign()
        },
        json: {
          channel: _0x469c15.get(_0x148548, "channel", "SFAPP"),
          pageType: _0x38a0e2.pageType,
          deviceId: this.deviceId
        }
      },
          {
        result: _0x3566c1
      } = await this.request(_0x512e57);
      _0x3566c1?.["success"] ? this.log("领取任务[" + _0x38a0e2.title + "]奖励成功") : this.log("领取任务[" + _0x38a0e2.title + "]奖励失败: " + (_0x3566c1?.["errorMessage"] || (_0x3566c1 ? JSON.stringify(_0x3566c1) : "无返回")));
    } catch (_0x4384e1) {
      console.log(_0x4384e1);
    }
  }

  async coupon_list(_0x1b652d = 1, _0x18e366 = 100, _0x4fd61a = {}) {
    try {
      const _0x1eeac6 = {
        couponType: "",
        pageNo: _0x1b652d,
        pageSize: _0x18e366
      };
      let _0x11b8df = {
        fn: "coupon_list",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/coupon/available/list",
        headers: { ...this.getSign()
        },
        json: _0x1eeac6
      },
          {
        result: _0xa290af
      } = await this.request(_0x11b8df);

      if (_0xa290af?.["success"]) {
        let _0x2286bb = [],
            _0x3c075c = _0xa290af?.["obj"] || [];

        for (let _0xb4267 of _0x3c075c) {
          let {
            couponType: _0x30365a,
            invalidTm: _0x21099d,
            pledgeAmt: _0x3c63c2,
            couponName: _0xc1dcd2
          } = _0xb4267;
          _0x30365a === "1" && _0x3c63c2 >= 12 && _0x2286bb.push(_0xc1dcd2 + ", 过期时间: " + _0x21099d);
        }

        if (_0x2286bb.length) {
          const _0x3917a3 = {
            notify: true
          };
          this.log("大额优惠券:", _0x3917a3);
          const _0x196e55 = {
            notify: true
          };

          _0x469c15.log(_0x2286bb.join("\n"), _0x196e55);
        }
      } else {
        this.log("查询账号券失败: " + (_0xa290af?.["errorMessage"] || (_0xa290af ? JSON.stringify(_0xa290af) : "无返回")));
      }
    } catch (_0x34780d) {
      console.log(_0x34780d);
    }
  }

  async personalInfoNew(_0x571070 = {}) {
    try {
      let _0x1d122f = {
        fn: "personalInfoNew",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberIntegral~userInfoService~personalInfoNew",
        headers: { ...this.getSign()
        },
        json: {}
      },
          {
        result: _0x554234
      } = await this.request(_0x1d122f);

      if (_0x554234?.["success"]) {
        this.userId = _0x554234.obj.userId;
        const _0x10371c = {
          notify: true
        };
        this.log("积分: " + _0x554234.obj.availablePoints, _0x10371c);
      } else {
        this.log("查询账号积分失败: " + (_0x554234?.["errorMessage"] || (_0x554234 ? JSON.stringify(_0x554234) : "无返回")));
      }
    } catch (_0x19aa7b) {
      console.log(_0x19aa7b);
    }
  }

  async bee_indexData(_0x1beacd = {}) {
    try {
      let _0x396c73 = _0x469c15.randomList(_0xa04af7.filter(_0x455b98 => _0x455b98 != this.userId));

      const _0x3a89b6 = {
        inviteUserId: _0x396c73
      };
      let _0x1dd1f9 = {
        fn: "bee_indexData",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~receiveExchangeIndexService~indexData",
        headers: { ...this.getSign()
        },
        json: _0x3a89b6
      };
      {
        let {
          result: _0x4bbc43
        } = await this.request(_0x469c15.copy(_0x1dd1f9));

        if (_0x4bbc43?.["success"]) {
          _0x4bbc43?.["obj"]?.["friendAwards"]?.["length"] && this.log("获得奖励: " + _0x4bbc43.obj.friendAwards.map(_0x1f38ed => _0x1f38ed.name).join(","));

          let _0x38a4b0 = _0x4bbc43?.["obj"]?.["gameNum"] || 0;

          this.log("可以采蜜冒险" + _0x38a4b0 + "次");

          while (_0x38a4b0-- > 0) {
            await this.bee_gameReport();
          }

          await this.bee_taskDetail();
        } else {
          const _0x3fd0d5 = {
            notify: true
          };
          this.log("进入采蜜游戏主页失败: " + (_0x4bbc43?.["errorMessage"] || (_0x4bbc43 ? JSON.stringify(_0x4bbc43) : "无返回")), _0x3fd0d5);
          return;
        }
      }
      {
        let {
          result: _0x1c9adf
        } = await this.request(_0x469c15.copy(_0x1dd1f9));

        if (_0x1c9adf?.["success"]) {
          for (let _0x13a20c of _0x1c9adf?.["obj"]?.["taskDetail"] || []) {
            await this.bee_receiveHoney(_0x13a20c);
          }
        } else {
          const _0x1f1601 = {
            notify: true
          };
          this.log("进入采蜜游戏主页失败: " + (_0x1c9adf?.["errorMessage"] || (_0x1c9adf ? JSON.stringify(_0x1c9adf) : "无返回")), _0x1f1601);
          return;
        }
      }
      {
        let {
          result: _0x37d412
        } = await this.request(_0x469c15.copy(_0x1dd1f9));

        if (_0x37d412?.["success"]) {
          const _0x5991b3 = {
            notify: true
          };
          this.log("采蜜游戏丰蜜: " + (_0x37d412?.["obj"]?.["usableHoney"] || 0), _0x5991b3);
        } else {
          const _0x334c28 = {
            notify: true
          };
          this.log("进入采蜜游戏主页失败: " + (_0x37d412?.["errorMessage"] || (_0x37d412 ? JSON.stringify(_0x37d412) : "无返回")), _0x334c28);
          return;
        }
      }
    } catch (_0x76f475) {
      console.log(_0x76f475);
    }
  }

  async bee_receiveHoney(_0x5a2084, _0x704917 = {}) {
    try {
      const _0x47f41f = {
        taskType: _0x5a2084.type
      };
      let _0x299610 = {
        fn: "bee_receiveHoney",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~receiveExchangeIndexService~receiveHoney",
        headers: { ...this.getSign()
        },
        json: _0x47f41f
      },
          {
        result: _0x387a61
      } = await this.request(_0x299610);
      _0x387a61?.["success"] ? this.log("领取[" + _0x5a2084.type + "]奖励获得: " + _0x5a2084.value + "丰蜜") : this.log("领取[" + _0x5a2084.type + "]奖励失败: " + (_0x387a61?.["errorMessage"] || (_0x387a61 ? JSON.stringify(_0x387a61) : "无返回")));
    } catch (_0x4d0423) {
      console.log(_0x4d0423);
    }
  }

  async bee_gameReport(_0x32d65d = {}) {
    try {
      let _0x49e1e6 = 20;
      const _0x505eb9 = {
        gatherHoney: _0x49e1e6
      };
      let _0x17a035 = {
        fn: "bee_gameReport",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~receiveExchangeGameService~gameReport",
        headers: { ...this.getSign()
        },
        json: _0x505eb9
      },
          {
        result: _0x174bc3
      } = await this.request(_0x17a035);
      _0x174bc3?.["success"] ? this.log("采蜜冒险获得" + _0x49e1e6 + "丰蜜") : this.log("采蜜冒险失败: " + (_0x174bc3?.["errorMessage"] || (_0x174bc3 ? JSON.stringify(_0x174bc3) : "无返回")));
    } catch (_0x33dd25) {
      console.log(_0x33dd25);
    }
  }

  async bee_taskDetail(_0x459a0b = {}) {
    try {
      let _0x5ae4e4 = {
        fn: "bee_taskDetail",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~receiveExchangeIndexService~taskDetail",
        headers: { ...this.getSign()
        },
        json: {}
      },
          {
        result: _0x558466
      } = await this.request(_0x5ae4e4);

      if (_0x558466?.["success"]) {
        for (let _0x270ec2 of _0x558466.obj.list) {
          if (!_0x270ec2.taskCode) {
            continue;
          }

          switch (_0x270ec2.status) {
            case 2:
              if (_0x3a8efd.includes(_0x270ec2.taskType)) {
                break;
              }

              await this.bee_finishTask(_0x270ec2);

            case 1:
            case 3:
              break;

            default:
              this.log("任务[" + _0x270ec2.title + "] -- 未知状态[" + _0x270ec2.status + "]");
              break;
          }
        }
      } else {
        this.log("查询任务失败: " + (_0x558466?.["errorMessage"] || (_0x558466 ? JSON.stringify(_0x558466) : "无返回")));
      }
    } catch (_0x7686cf) {
      console.log(_0x7686cf);
    }
  }

  async bee_finishTask(_0x1c7555, _0x599878 = {}) {
    try {
      const _0xaa7048 = {
        taskCode: _0x1c7555.taskCode
      };
      let _0x424787 = {
        fn: "bee_finishTask",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberEs~taskRecord~finishTask",
        headers: { ...this.getSign()
        },
        json: _0xaa7048
      },
          {
        result: _0x2a04b5
      } = await this.request(_0x424787);
      _0x2a04b5?.["success"] ? this.log("完成采蜜任务[" + _0x1c7555.taskType + "]成功") : this.log("完成采蜜任务[" + _0x1c7555.taskType + "]失败: " + (_0x2a04b5?.["errorMessage"] || (_0x2a04b5 ? JSON.stringify(_0x2a04b5) : "无返回")));
    } catch (_0x3f03d5) {
      console.log(_0x3f03d5);
    }
  }

  async superWelfare_receiveRedPacket(_0x6f5de3 = {}) {
    try {
      const _0x1501ce = {
        channel: _0x32c305
      };
      let _0x434f6a = {
        fn: "superWelfare_receiveRedPacket",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberActLengthy~redPacketActivityService~superWelfare~receiveRedPacket",
        headers: { ...this.getSign()
        },
        json: _0x1501ce
      },
          {
        result: _0x458de9
      } = await this.request(_0x434f6a);

      if (_0x458de9?.["success"]) {
        let _0x5a8cc5 = _0x458de9?.["obj"]?.["giftList"];

        if (_0x458de9?.["obj"]?.["extraGiftList"]?.["length"]) {
          _0x5a8cc5 = _0x5a8cc5.concat(_0x458de9.obj.extraGiftList);
        }

        let _0x1be1e5 = _0x5a8cc5?.["map"](_0x1c0837 => _0x1c0837.giftName)?.["join"](", ") || "",
            _0x3b0357 = _0x458de9?.["obj"]?.["receiveStatus"] == 1 ? "领取成功" : "已领取过";

        const _0x2740e5 = {
          notify: true
        };
        this.log("超值福利签到[" + _0x3b0357 + "]: " + _0x1be1e5, _0x2740e5);
      } else {
        this.log("超值福利签到失败: " + (_0x458de9?.["errorMessage"] || (_0x458de9 ? JSON.stringify(_0x458de9) : "无返回")));
      }
    } catch (_0x565cf7) {
      console.log(_0x565cf7);
    }
  }

  async memberDay_invite(_0x3567ec = {}) {
    try {
      let _0x387db3 = _0x469c15.randomList(_0xa04af7.filter(_0x3d9cf5 => _0x3d9cf5 != this.userId));

      const _0xb81350 = {
        inviteUserId: _0x387db3
      };
      let _0x607208 = {
        fn: "memberDay_invite",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayIndexService~index",
        headers: { ...this.getSign()
        },
        json: _0xb81350
      };
      await this.request(_0x607208);
      let {
        result: _0x2fadaa
      } = await this.request(_0x607208);

      if (_0x2fadaa?.["success"]) {
        let {
          canReceiveInviteAward: _0x4b8f89,
          risk: _0x210077
        } = _0x2fadaa?.["obj"];
        _0x4b8f89 && (await this.memberDay_receiveInviteAward(_0x387db3));

        if (this.memberDay_black) {
          return;
        }

        await this.memberDay_index();
      } else {
        let _0x4c6dab = _0x2fadaa?.["errorMessage"] || (_0x2fadaa ? JSON.stringify(_0x2fadaa) : "无返回");

        this.log("查询会员日失败: " + _0x4c6dab);

        if (_0x4c6dab?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x254dfd = {
            notify: true
          };
          this.log("会员日任务风控", _0x254dfd);
        }
      }
    } catch (_0x5e586e) {
      console.log(_0x5e586e);
    }
  }

  async memberDay_index(_0x2ee883 = {}) {
    try {
      let _0x2d9282 = {
        fn: "memberDay_index",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayIndexService~index",
        headers: { ...this.getSign()
        },
        json: {}
      },
          {
        result: _0x5b5fd6
      } = await this.request(_0x2d9282);

      if (_0x5b5fd6?.["success"]) {
        let {
          lotteryNum: _0x541381,
          risk: _0x8c00d7
        } = _0x5b5fd6?.["obj"];
        await this.memberDay_redPacketReceivedStatus();
        _0x541381 = _0x541381 || 0;
        this.log("会员日可以抽奖" + _0x541381 + "次");

        while (_0x541381-- > 0) {
          await this.memberDay_lottery();
        }

        if (this.memberDay_black) {
          return;
        }

        await this.memberDay_taskList();

        if (this.memberDay_black) {
          return;
        }

        await this.memberDay_redPacketStatus();
      } else {
        let _0x3d2286 = _0x5b5fd6?.["errorMessage"] || (_0x5b5fd6 ? JSON.stringify(_0x5b5fd6) : "无返回");

        this.log("查询会员日失败: " + _0x3d2286);

        if (_0x3d2286?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x151d85 = {
            notify: true
          };
          this.log("会员日任务风控", _0x151d85);
        }
      }
    } catch (_0x42d369) {
      console.log(_0x42d369);
    }
  }

  async memberDay_receiveInviteAward(_0x22f21d, _0x1a6de1 = {}) {
    try {
      const _0xb92a81 = {
        inviteUserId: _0x22f21d
      };
      let _0x4c4e28 = {
        fn: "memberDay_receiveInviteAward",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayIndexService~receiveInviteAward",
        headers: { ...this.getSign()
        },
        json: _0xb92a81
      },
          {
        result: _0x3f093d
      } = await this.request(_0x4c4e28);

      if (_0x3f093d?.["success"]) {
        let {
          productName = "空气"
        } = _0x3f093d?.["obj"] || {};
        const _0x5209f8 = {
          notify: true
        };
        this.log("会员日奖励: " + productName, _0x5209f8);
      } else {
        let _0x35458e = _0x3f093d?.["errorMessage"] || (_0x3f093d ? JSON.stringify(_0x3f093d) : "无返回");

        this.log("领取会员日奖励失败: " + _0x35458e);

        if (_0x35458e?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x47a9e4 = {
            notify: true
          };
          this.log("会员日任务风控", _0x47a9e4);
        }
      }
    } catch (_0x3142f5) {
      console.log(_0x3142f5);
    }
  }

  async memberDay_lottery(_0x47b1c7 = {}) {
    try {
      let _0x5f2ddd = {
        fn: "memberDay_lottery",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayLotteryService~lottery",
        headers: { ...this.getSign()
        },
        json: {}
      },
          {
        result: _0x3bfffa
      } = await this.request(_0x5f2ddd);

      if (_0x3bfffa?.["success"]) {
        let {
          productName = "空气"
        } = _0x3bfffa?.["obj"] || {};
        const _0xee9b78 = {
          notify: true
        };
        this.log("会员日抽奖: " + productName, _0xee9b78);
      } else {
        let _0x4ce7ea = _0x3bfffa?.["errorMessage"] || (_0x3bfffa ? JSON.stringify(_0x3bfffa) : "无返回");

        this.log("会员日抽奖失败: " + _0x4ce7ea);

        if (_0x4ce7ea?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x3a147f = {
            notify: true
          };
          this.log("会员日任务风控", _0x3a147f);
        }
      }
    } catch (_0x3b06ff) {
      console.log(_0x3b06ff);
    }
  }

  async memberDay_taskList(_0xcf7abf = {}) {
    try {
      const _0x3439e8 = {
        activityCode: _0x3d074d,
        channelType: "MINI_PROGRAM"
      };
      let _0xb77bfa = {
        fn: "memberDay_taskList",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~activityTaskService~taskList",
        headers: { ...this.getSign()
        },
        json: _0x3439e8
      },
          {
        result: _0x3dedb4
      } = await this.request(_0xb77bfa);

      if (_0x3dedb4?.["success"]) {
        let _0xa384c8 = _0x3dedb4?.["obj"] || [];

        for (let _0x56c5d0 of _0xa384c8.filter(_0x33b8e7 => _0x33b8e7.status == 1)) {
          if (this.memberDay_black) {
            return;
          }

          await this.memberDay_fetchMixTaskReward(_0x56c5d0);
        }

        for (let _0x111030 of _0xa384c8.filter(_0x3bceb0 => _0x3bceb0.status == 2)) {
          if (this.memberDay_black) {
            return;
          }

          switch (_0x111030.taskType) {
            case "SEND_SUCCESS":
            case "INVITEFRIENDS_PARTAKE_ACTIVITY":
            case "OPEN_SVIP":
            case "OPEN_NEW_EXPRESS_CARD":
            case "OPEN_FAMILY_CARD":
            case "CHARGE_NEW_EXPRESS_CARD":
            case "INTEGRAL_EXCHANGE":
              {
                break;
              }

            default:
              {
                for (let _0x162ef0 = 0; _0x162ef0 < _0x111030.restFinishTime && !this.memberDay_black; _0x162ef0++) {
                  await this.memberDay_finishTask(_0x111030);
                }

                break;
              }
          }
        }
      } else {
        let _0x4d5074 = _0x3dedb4?.["errorMessage"] || (_0x3dedb4 ? JSON.stringify(_0x3dedb4) : "无返回");

        this.log("查询会员日任务失败: " + _0x4d5074);

        if (_0x4d5074?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x4f6872 = {
            notify: true
          };
          this.log("会员日任务风控", _0x4f6872);
        }
      }
    } catch (_0x5a3d04) {
      console.log(_0x5a3d04);
    }
  }

  async memberDay_finishTask(_0x998c79, _0x386aae = {}) {
    try {
      const _0xf207ff = {
        taskCode: _0x998c79.taskCode
      };
      let _0x4c443f = {
        fn: "memberDay_finishTask",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberEs~taskRecord~finishTask",
        headers: { ...this.getSign()
        },
        json: _0xf207ff
      },
          {
        result: _0x2423ed
      } = await this.request(_0x4c443f);

      if (_0x2423ed?.["success"]) {
        this.log("完成会员日任务[" + _0x998c79.taskName + "]成功");
        await this.memberDay_fetchMixTaskReward(_0x998c79);
      } else {
        let _0x185447 = _0x2423ed?.["errorMessage"] || (_0x2423ed ? JSON.stringify(_0x2423ed) : "无返回");

        this.log("完成会员日任务[" + _0x998c79.taskName + "]失败: " + _0x185447);

        if (_0x185447?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x5da653 = {
            notify: true
          };
          this.log("会员日任务风控", _0x5da653);
        }
      }
    } catch (_0x110df0) {
      console.log(_0x110df0);
    }
  }

  async memberDay_fetchMixTaskReward(_0x41764f, _0x2eb808 = {}) {
    try {
      const _0x1f2424 = {
        taskType: _0x41764f.taskType,
        activityCode: _0x3d074d,
        channelType: "MINI_PROGRAM"
      };
      let _0x22d90d = {
        fn: "memberDay_fetchMixTaskReward",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~activityTaskService~fetchMixTaskReward",
        headers: { ...this.getSign()
        },
        json: _0x1f2424
      },
          {
        result: _0x42d666
      } = await this.request(_0x22d90d);

      if (_0x42d666?.["success"]) {
        this.log("领取会员日任务[" + _0x41764f.taskName + "]奖励成功");
      } else {
        let _0x31227e = _0x42d666?.["errorMessage"] || (_0x42d666 ? JSON.stringify(_0x42d666) : "无返回");

        this.log("领取会员日任务[" + _0x41764f.taskName + "]奖励失败: " + _0x31227e);

        if (_0x31227e?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x58b47e = {
            notify: true
          };
          this.log("会员日任务风控", _0x58b47e);
        }
      }
    } catch (_0x54bd15) {
      console.log(_0x54bd15);
    }
  }

  async memberDay_redPacketReceivedStatus(_0x782c6b = {}) {
    try {
      let _0x450914 = {
        fn: "memberDay_redPacketReceivedStatus",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayTaskService~redPacketReceivedStatus",
        headers: { ...this.getSign()
        },
        json: {}
      },
          {
        result: _0x3c14f7
      } = await this.request(_0x450914);

      if (_0x3c14f7?.["success"]) {
        for (let _0x3109b3 of _0x3c14f7?.["obj"] || []) {
          if (_0x3109b3.received) {
            continue;
          }

          let _0x30a32f = new Date().getHours();

          _0x3109b3.receiveHour == _0x30a32f && (await this.memberDay_receiveRedPacket(_0x3109b3.receiveHour));
        }
      } else {
        let _0x204339 = _0x3c14f7?.["errorMessage"] || (_0x3c14f7 ? JSON.stringify(_0x3c14f7) : "无返回");

        this.log("会员日查询整点领红包失败: " + _0x204339);

        if (_0x204339?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x2e032a = {
            notify: true
          };
          this.log("会员日任务风控", _0x2e032a);
        }
      }
    } catch (_0x2e47b5) {
      console.log(_0x2e47b5);
    }
  }

  async memberDay_receiveRedPacket(_0x46fc50, _0x5e3207 = {}) {
    try {
      const _0x1ab9f6 = {
        receiveHour: _0x46fc50
      };
      let _0x77288f = {
        fn: "memberDay_receiveRedPacket",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayTaskService~receiveRedPacket",
        headers: { ...this.getSign()
        },
        json: _0x1ab9f6
      },
          {
        result: _0x57dcad
      } = await this.request(_0x77288f);

      if (_0x57dcad?.["success"]) {
        this.log("会员日领取" + _0x46fc50 + "点红包成功");
      } else {
        let _0x3beae7 = _0x57dcad?.["errorMessage"] || (_0x57dcad ? JSON.stringify(_0x57dcad) : "无返回");

        this.log("会员日领取" + _0x46fc50 + "点红包失败: " + _0x3beae7);

        if (_0x3beae7?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x16b022 = {
            notify: true
          };
          this.log("会员日任务风控", _0x16b022);
        }
      }
    } catch (_0x33bffb) {
      console.log(_0x33bffb);
    }
  }

  async memberDay_redPacketStatus(_0x47d004 = {}) {
    try {
      let _0xb5de48 = {
        fn: "memberDay_redPacketStatus",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayPacketService~redPacketStatus",
        headers: { ...this.getSign()
        },
        json: {}
      },
          {
        result: _0x18a54b
      } = await this.request(_0xb5de48);

      if (_0x18a54b?.["success"]) {
        let {
          drewToday: _0x3bc127,
          packetList: _0x2520b0
        } = _0x18a54b?.["obj"];
        this.memberDay_redPacket_drewToday = _0x3bc127;

        for (let _0x3be5de of _0x2520b0) {
          this.memberDay_redPacket_map[_0x3be5de.level] = _0x3be5de.count;
        }

        let _0x4b0ad5 = _0x186c1f;

        for (let _0x4ee1a3 = 1; _0x4ee1a3 < _0x4b0ad5; _0x4ee1a3++) {
          let _0x93635 = this.memberDay_redPacket_map[_0x4ee1a3];

          while (_0x93635 >= 2) {
            await this.memberDay_redPacketMerge(_0x4ee1a3);
            _0x93635 -= 2;
          }
        }

        let _0x40d445 = [],
            _0x296246 = 0;

        for (let _0x39e996 in this.memberDay_redPacket_map) {
          if (!this.memberDay_redPacket_map[_0x39e996]) {
            continue;
          }

          _0x40d445.push("[" + _0x39e996 + "级]X" + this.memberDay_redPacket_map[_0x39e996]);

          let _0x5521c2 = parseInt(_0x39e996);

          _0x5521c2 < _0x4b0ad5 && (_0x296246 += 1 << _0x5521c2 - 1);
        }

        const _0x2dfb64 = {
          notify: true
        };
        this.log("会员日合成列表: " + _0x40d445.join(", "), _0x2dfb64);

        if (this.memberDay_redPacket_map[_0x4b0ad5]) {
          const _0x202685 = {
            notify: true
          };
          this.log("会员日已拥有[" + _0x4b0ad5 + "级]红包X" + this.memberDay_redPacket_map[_0x4b0ad5], _0x202685);
          await this.memberDay_redPacketDraw(_0x4b0ad5);
        } else {
          let _0x11f8ac = _0x43c23b - _0x296246;

          const _0x5959d7 = {
            notify: true
          };
          this.log("会员日距离[" + _0x4b0ad5 + "级]红包还差: [1级]红包X" + _0x11f8ac, _0x5959d7);
        }
      } else {
        let _0x91187f = _0x18a54b?.["errorMessage"] || (_0x18a54b ? JSON.stringify(_0x18a54b) : "无返回");

        this.log("查询会员日合成失败: " + _0x91187f);

        if (_0x91187f?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x1ebe85 = {
            notify: true
          };
          this.log("会员日任务风控", _0x1ebe85);
        }
      }
    } catch (_0x5d4421) {
      console.log(_0x5d4421);
    }
  }

  async memberDay_redPacketMerge(_0xaddfa2, _0x14ced7 = {}) {
    try {
      const _0xd11f02 = {
        level: _0xaddfa2,
        num: 2
      };
      let _0x3b4f5c = {
        fn: "memberDay_redPacketMerge",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayPacketService~redPacketMerge",
        headers: { ...this.getSign()
        },
        json: _0xd11f02
      },
          {
        result: _0x72f5ba
      } = await this.request(_0x3b4f5c);

      if (_0x72f5ba?.["success"]) {
        this.log("会员日合成: [" + _0xaddfa2 + "级]红包X2 -> [" + (_0xaddfa2 + 1) + "级]红包");
        this.memberDay_redPacket_map[_0xaddfa2] -= 2;

        if (!this.memberDay_redPacket_map[_0xaddfa2 + 1]) {
          this.memberDay_redPacket_map[_0xaddfa2 + 1] = 0;
        }

        this.memberDay_redPacket_map[_0xaddfa2 + 1]++;
      } else {
        let _0x15f169 = _0x72f5ba?.["errorMessage"] || (_0x72f5ba ? JSON.stringify(_0x72f5ba) : "无返回");

        this.log("会员日合成两个[" + _0xaddfa2 + "级]红包失败: " + _0x15f169);

        if (_0x15f169?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x3adbe9 = {
            notify: true
          };
          this.log("会员日任务风控", _0x3adbe9);
        }
      }
    } catch (_0x19c1b5) {
      console.log(_0x19c1b5);
    }
  }

  async memberDay_redPacketDraw(_0x38c38f, _0x3d7b24 = {}) {
    try {
      let _0x47c28f = {
        fn: "memberDay_redPacketDraw",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayPacketService~redPacketDraw",
        headers: { ...this.getSign()
        },
        json: {
          level: _0x38c38f.toString()
        }
      },
          {
        result: _0x215d17
      } = await this.request(_0x47c28f);

      if (_0x215d17?.["success"]) {
        let _0x20fd04 = _0x215d17?.["obj"]?.["map"](_0x4fcb49 => _0x4fcb49.couponName) || [];

        const _0x362b5f = {
          notify: true
        };
        this.log("会员日提取[" + _0x38c38f + "级]红包: " + (_0x20fd04.join(", ") || "空气"), _0x362b5f);
      } else {
        let _0x46b4bf = _0x215d17?.["errorMessage"] || (_0x215d17 ? JSON.stringify(_0x215d17) : "无返回");

        this.log("会员日提取[" + _0x38c38f + "级]红包失败: " + _0x46b4bf);

        if (_0x46b4bf?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x192355 = {
            notify: true
          };
          this.log("会员日任务风控", _0x192355);
        }
      }
    } catch (_0x62b306) {
      console.log(_0x62b306);
    }
  }

  async jika2024_taskList(_0x53b15a = {}) {
    try {
      let _0x16792e = {
        fn: "jika2024_taskList",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~activityTaskService~taskList",
        headers: { ...this.getSign()
        },
        json: {
          activityCode: _0x48878a,
          channelType: "MINI_PROGRAM"
        }
      },
          {
        result: _0x14502d
      } = await this.request(_0x16792e);

      if (_0x14502d?.["success"]) {
        let _0x5e5779 = _0x14502d?.["obj"] || [];

        for (let _0x324719 of _0x5e5779.filter(_0x3d06a => _0x3d06a.status == 1)) {
          if (this.jika_black) {
            return;
          }

          for (let _0x3642f5 = 0; _0x3642f5 < _0x324719.canReceiveTokenNum; _0x3642f5++) {
            await this.jika2024_fetchMixTaskReward(_0x324719);
          }
        }

        for (let _0xb2f143 of _0x5e5779.filter(_0x42be67 => _0x42be67.status == 2)) {
          if (this.jika_black) {
            return;
          }

          switch (_0xb2f143.taskType) {
            case "PLAY_ACTIVITY_GAME":
              {
                this.log("开始玩新年集卡猜成语");

                for (let _0x429d6c = 1; _0x429d6c <= 10; _0x429d6c++) {
                  let _0x32e2bd = Math.floor(Math.random() * 3000) + 1000;

                  await _0x469c15.wait(_0x32e2bd);
                  await this.jika2024_chengyu_win(_0x429d6c);
                }

                break;
              }

            case "FOLLOW_SFZHUNONG_VEDIO_ID":
              {
                break;
              }

            case "CLICK_MY_SETTING":
            case "CLICK_TEMPLATE":
            case "REAL_NAME":
            case "SEND_SUCCESS_RECALL":
            case "OPEN_SVIP":
            case "OPEN_FAST_CARD":
            case "FIRST_CHARGE_NEW_EXPRESS_CARD":
            case "CHARGE_NEW_EXPRESS_CARD":
            case "INTEGRAL_EXCHANGE":
              {
                break;
              }

            default:
              {
                for (let _0x5c459d = 0; _0x5c459d < _0xb2f143.restFinishTime && !this.jika_black; _0x5c459d++) {
                  await this.jika2024_finishTask(_0xb2f143);
                }

                break;
              }
          }
        }
      } else {
        this.log("查询新年集卡任务失败: " + (_0x14502d?.["errorMessage"] || (_0x14502d ? JSON.stringify(_0x14502d) : "无返回")));
      }
    } catch (_0x1fcb3d) {
      console.log(_0x1fcb3d);
    }
  }

  async jika2024_finishTask(_0x196307, _0x56c2e6 = {}) {
    try {
      const _0x12ee84 = {
        taskCode: _0x196307.taskCode
      };
      let _0x5b90dd = {
        fn: "jika2024_finishTask",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonRoutePost/memberEs/taskRecord/finishTask",
        headers: { ...this.getSign()
        },
        json: _0x12ee84
      },
          {
        result: _0x4c58c1
      } = await this.request(_0x5b90dd);
      _0x4c58c1?.["success"] ? (this.log("完成新年集卡任务[" + _0x196307.taskName + "]成功"), await this.jika2024_fetchMixTaskReward(_0x196307)) : this.log("完成新年集卡任务[" + _0x196307.taskName + "]失败: " + (_0x4c58c1?.["errorMessage"] || (_0x4c58c1 ? JSON.stringify(_0x4c58c1) : "无返回")));
    } catch (_0x1638f0) {
      console.log(_0x1638f0);
    }
  }

  async jika2024_fetchMixTaskReward(_0x3c0beb, _0x22f9ec = {}) {
    try {
      let _0x2c726c = {
        fn: "jika2024_fetchMixTaskReward",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonNoLoginPost/~memberNonactivity~yearEnd2023TaskService~fetchMixTaskReward",
        headers: { ...this.getSign()
        },
        json: {
          taskType: _0x3c0beb.taskType,
          activityCode: _0x48878a,
          channelType: "MINI_PROGRAM"
        }
      },
          {
        result: _0x2d3d63
      } = await this.request(_0x2c726c);

      if (_0x2d3d63?.["success"]) {
        let _0x1478e0 = [],
            {
          receivedAccountList = [],
          turnedAward = {}
        } = _0x2d3d63.obj;

        for (let _0x57c64b of receivedAccountList) {
          _0x1478e0.push("" + (_0x21e6a[_0x57c64b.currency] || "[" + _0x57c64b.currency + "]"));
        }

        turnedAward?.["couponName"] && _0x1478e0.push("[优惠券]" + turnedAward?.["couponName"]);
        this.log("领取任务[" + _0x3c0beb.taskName + "]奖励: " + _0x1478e0.join(", "));
      } else {
        let _0x1e5c01 = _0x2d3d63?.["errorMessage"] || (_0x2d3d63 ? JSON.stringify(_0x2d3d63) : "无返回");

        this.log("领取任务[" + _0x3c0beb.taskName + "]奖励失败: " + _0x1e5c01);
        _0x1e5c01?.["includes"]("用户手机号校验未通过") && (this.jika_black = true);
      }
    } catch (_0x238c73) {
      console.log(_0x238c73);
    }
  }

  async jika2024_getAward(_0x1db7de, _0xc995ed = {}) {
    try {
      const _0x2016fc = {
        cardType: _0x1db7de
      };
      let _0x56cd28 = {
        fn: "jika2024_getAward",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~yearEnd2023GardenPartyService~getAward",
        headers: { ...this.getSign()
        },
        json: _0x2016fc
      },
          {
        result: _0x35252f
      } = await this.request(_0x56cd28);

      if (_0x35252f?.["success"]) {
        let _0xa53aec = [],
            {
          receivedAccountList = [],
          turnedAward = {}
        } = _0x35252f.obj;

        for (let _0x3dd4ee of receivedAccountList) {
          _0xa53aec.push("" + (_0x21e6a[_0x3dd4ee.currency] || "[" + _0x3dd4ee.currency + "]"));
        }

        turnedAward?.["couponName"] && _0xa53aec.push("[优惠券]" + turnedAward?.["couponName"]);
        this.log("逛集市领卡奖励: " + _0xa53aec.join(", "));
      } else {
        let _0x8d4cd5 = _0x35252f?.["errorMessage"] || (_0x35252f ? JSON.stringify(_0x35252f) : "无返回");

        this.log("逛集市领卡失败: " + _0x8d4cd5);
        _0x8d4cd5?.["includes"]("用户手机号校验未通过") && (this.jika_black = true);
      }
    } catch (_0x213437) {
      console.log(_0x213437);
    }
  }

  async jika2024_chengyu_index(_0x58e928 = {}) {
    try {
      let _0x546b47 = {
        fn: "jika2024_chengyu_index",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~yearEnd2023GuessIdiomService~index",
        headers: { ...this.getSign()
        },
        json: {}
      },
          {
        result: _0xe989ee
      } = await this.request(_0x546b47);

      if (_0xe989ee?.["success"]) {
        if (_0xe989ee?.["obj"]?.["bigCardFlag"]) {
          this.log("今天已完成新年集卡猜成语");
        } else {
          this.log("开始玩新年集卡猜成语");

          for (let _0x2f3c0a = 1; _0x2f3c0a <= 10; _0x2f3c0a++) {
            let _0x450002 = Math.floor(Math.random() * 3000) + 1000;

            await _0x469c15.wait(_0x450002);
            await this.jika2024_chengyu_win(_0x2f3c0a);
          }
        }
      } else {
        this.log("查询新年集卡猜成语任务失败: " + (_0xe989ee?.["errorMessage"] || (_0xe989ee ? JSON.stringify(_0xe989ee) : "无返回")));
      }
    } catch (_0x340a81) {
      console.log(_0x340a81);
    }
  }

  async jika2024_chengyu_win(_0x53271f, _0x388b9c = {}) {
    try {
      const _0x3a61e8 = {
        index: _0x53271f
      };
      let _0x4cd2c0 = {
        fn: "jika2024_chengyu_win",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~yearEnd2023GuessIdiomService~win",
        headers: { ...this.getSign()
        },
        json: _0x3a61e8
      },
          {
        result: _0x31fb67
      } = await this.request(_0x4cd2c0);

      if (_0x31fb67?.["success"]) {
        let {
          isAward: _0x1dfa02,
          currencyDTOList: _0x1cca8b
        } = _0x31fb67?.["obj"];

        if (_0x1dfa02) {
          let _0xafac7d = [];

          for (let _0x6e081e of _0x1cca8b) {
            _0xafac7d.push("" + (_0x21e6a[_0x6e081e.currency] || "[" + _0x6e081e.currency + "]"));
          }

          this.log("猜成语第" + _0x53271f + "关通关成功: " + _0xafac7d.join(", "));
        } else {
          this.log("猜成语第" + _0x53271f + "关通关成功");
        }
      } else {
        let _0x51eff2 = _0x31fb67?.["errorMessage"] || (_0x31fb67 ? JSON.stringify(_0x31fb67) : "无返回");

        this.log("猜成语第" + _0x53271f + "关失败: " + _0x51eff2);
        _0x51eff2?.["includes"]("系统繁忙") && (this.jika_black = true);
      }
    } catch (_0x1dc2c1) {
      console.log(_0x1dc2c1);
    }
  }

  async jika2024_cardStatus(_0x1bafa7 = {}) {
    try {
      let _0x1b2993 = {
        fn: "jika2024_cardStatus",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~yearEnd2023CardService~cardStatus",
        headers: { ...this.getSign()
        },
        json: {}
      },
          {
        result: _0x467727
      } = await this.request(_0x1b2993);

      if (_0x467727?.["success"]) {
        let _0x5c17d7 = _0x467727?.["obj"]?.["accountList"] || [];

        if (_0x5c17d7?.["length"]) {
          this.cards = _0x5c17d7.filter(_0x2ea85d => _0x2ea85d.balance > 0);
          this.cards.sort((_0x3218cd, _0xf823b7) => {
            return _0xf823b7.balance - _0x3218cd.balance;
          });
          let _0x164869 = [];

          for (let _0x293674 of this.cards) {
            let _0x773dc6 = _0x21e6a[_0x293674.currency] || "[" + _0x293674.currency + "]";

            _0x164869.push(_0x773dc6 + "X" + _0x293674.balance);
          }

          const _0x56a449 = {
            notify: true
          };
          this.log("年卡: " + _0x164869.join(", "), _0x56a449);

          if (this.cards.filter(_0x73d6a9 => _0x73d6a9.balance > 0).filter(_0x4afc96 => _0x4afc96.currency == "COMMON_CARD").length > 0) {
            const _0x5327d = {
              notify: true
            };
            this.log("拥有万能卡, 请自行合成, 不自动抽奖", _0x5327d);
            return;
          }

          while (this.cards.filter(_0x55cf0e => _0x55cf0e.balance > 0).length >= 3 && !this.jika_black) {
            await this.jika2024_collectDrawAward();
          }
        } else {
          const _0x37a9d0 = {
            notify: true
          };
          this.log("还没有收集到年卡", _0x37a9d0);
        }
      } else {
        this.log("查询已收集年卡失败: " + (_0x467727?.["errorMessage"] || (_0x467727 ? JSON.stringify(_0x467727) : "无返回")));
      }
    } catch (_0x2a4d0e) {
      console.log(_0x2a4d0e);
    }
  }

  async jika2024_collectDrawAward(_0x496bf6 = {}) {
    try {
      let _0x4b72c5 = this.cards.filter(_0x410b98 => _0x410b98.balance > 0).map(_0x500035 => _0x500035.currency);

      if (_0x4b72c5.length > 6) {
        _0x4b72c5 = _0x4b72c5.slice(0, 6);
      }

      const _0x1b1289 = {
        accountList: _0x4b72c5
      };
      let _0x3f6c36 = {
        fn: "jika2024_collectDrawAward",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~yearEnd2023CardService~collectDrawAward",
        headers: { ...this.getSign()
        },
        json: _0x1b1289
      },
          {
        result: _0x269bf1
      } = await this.request(_0x3f6c36);

      if (_0x269bf1?.["success"]) {
        let {
          productName: _0x551c26
        } = _0x269bf1?.["obj"];
        const _0x18320f = {
          notify: true
        };
        this.log("使用" + _0x4b72c5.length + "种年卡合成: " + _0x551c26, _0x18320f);

        for (let _0x34720e of this.cards) {
          _0x4b72c5.includes(_0x34720e.currency) && (_0x34720e.balance -= 1);
        }
      } else {
        let _0x14da3b = _0x269bf1?.["errorMessage"] || (_0x269bf1 ? JSON.stringify(_0x269bf1) : "无返回");

        this.log("使用" + _0x4b72c5.length + "种年卡合成失败: " + _0x14da3b);
        _0x14da3b?.["includes"]("系统繁忙") && (this.jika_black = true);
      }
    } catch (_0x2bb0ee) {
      console.log(_0x2bb0ee);
    }
  }

  async jika2024_task(_0x2f460e = {}) {
    await this.jika2024_cardStatus();
  }

  async anniversary2024_weeklyGiftStatus(_0x10e9b1 = {}) {
    try {
      let _0x53c11b = {
        fn: "anniversary2024_weeklyGiftStatus",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024IndexService~weeklyGiftStatus",
        headers: { ...this.getSign()
        },
        json: {}
      },
          {
        result: _0x3bc779
      } = await this.request(_0x53c11b);

      if (_0x3bc779?.["success"]) {
        let _0x208db3 = _0x3bc779?.["obj"]?.["weeklyGiftList"] || [];

        for (let _0x563b37 of _0x208db3) {
          if (!_0x563b37.received) {
            let _0x1a0004 = new Date(_0x563b37.receiveStartTime),
                _0x1e5e0b = new Date(_0x563b37.receiveEndTime),
                _0xfee4ff = Date.now();

            _0xfee4ff >= _0x1a0004.getTime() && _0xfee4ff <= _0x1e5e0b.getTime() && (await this.anniversary2024_receiveWeeklyGift());
          }
        }
      } else {
        let _0x1a0ef8 = _0x3bc779?.["errorMessage"] || (_0x3bc779 ? JSON.stringify(_0x3bc779) : "无返回");

        this.log("查询周年庆每周领券失败: " + _0x1a0ef8);
        (_0x1a0ef8?.["includes"]("系统繁忙") || _0x1a0ef8?.["includes"]("用户手机号校验未通过")) && (this.anniversary_black = true);
      }
    } catch (_0x260540) {
      console.log(_0x260540);
    }
  }

  async anniversary2024_receiveWeeklyGift(_0xb036e5 = {}) {
    try {
      let _0x51c7f6 = {
        fn: "anniversary2024_receiveWeeklyGift",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024IndexService~receiveWeeklyGift",
        headers: { ...this.getSign()
        },
        json: {}
      },
          {
        result: _0x2a1278
      } = await this.request(_0x51c7f6);

      if (_0x2a1278?.["success"]) {
        let _0x375149 = _0x2a1278?.["obj"]?.["map"](_0x299eff => _0x299eff.productName);

        this.log("周年庆每周领券: " + _0x375149.join(", "));
      } else {
        let _0x58ee1f = _0x2a1278?.["errorMessage"] || (_0x2a1278 ? JSON.stringify(_0x2a1278) : "无返回");

        this.log("周年庆每周领券失败: " + _0x58ee1f);
        (_0x58ee1f?.["includes"]("系统繁忙") || _0x58ee1f?.["includes"]("用户手机号校验未通过")) && (this.anniversary_black = true);
      }
    } catch (_0x31d8af) {
      console.log(_0x31d8af);
    }
  }

  async anniversary2024_taskList(_0x5a0397 = {}) {
    try {
      const _0x3b66c2 = {
        activityCode: _0x3e39ad,
        channelType: "MINI_PROGRAM"
      };
      let _0xe0191c = {
        fn: "anniversary2024_taskList",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~activityTaskService~taskList",
        headers: { ...this.getSign()
        },
        json: _0x3b66c2
      },
          {
        result: _0x5dd4a3
      } = await this.request(_0xe0191c);

      if (_0x5dd4a3?.["success"]) {
        let _0x541bc4 = _0x5dd4a3?.["obj"] || [];

        for (let _0x5f115f of _0x541bc4.filter(_0x1ce8bc => _0x1ce8bc.status == 1)) {
          if (this.anniversary_black) {
            return;
          }

          for (let _0x42eb10 = 0; _0x42eb10 < _0x5f115f.canReceiveTokenNum; _0x42eb10++) {
            await this.anniversary2024_fetchMixTaskReward(_0x5f115f);
          }
        }

        for (let _0x1af06b of _0x541bc4.filter(_0x1b227f => _0x1b227f.status == 2)) {
          if (this.anniversary_black) {
            return;
          }

          switch (_0x1af06b.taskType) {
            case "PLAY_ACTIVITY_GAME":
            case "PLAY_HAPPY_ELIMINATION":
            case "PARTAKE_SUBJECT_GAME":
              {
                break;
              }

            case "FOLLOW_SFZHUNONG_VEDIO_ID":
              {
                break;
              }

            case "BROWSE_VIP_CENTER":
            case "GUESS_GAME_TIP":
            case "CREATE_SFID":
            case "CLICK_MY_SETTING":
            case "CLICK_TEMPLATE":
            case "REAL_NAME":
            case "SEND_SUCCESS_RECALL":
            case "OPEN_SVIP":
            case "OPEN_FAST_CARD":
            case "FIRST_CHARGE_NEW_EXPRESS_CARD":
            case "CHARGE_NEW_EXPRESS_CARD":
            case "INTEGRAL_EXCHANGE":
              {
                break;
              }

            default:
              {
                for (let _0x41c66d = 0; _0x41c66d < _0x1af06b.restFinishTime && !this.anniversary_black; _0x41c66d++) {
                  await this.anniversary2024_finishTask(_0x1af06b);
                }

                break;
              }
          }
        }
      } else {
        this.log("查询任务失败: " + (_0x5dd4a3?.["errorMessage"] || (_0x5dd4a3 ? JSON.stringify(_0x5dd4a3) : "无返回")));
      }
    } catch (_0x1002fa) {
      console.log(_0x1002fa);
    }
  }

  async anniversary2024_finishTask(_0x432115, _0x288af5 = {}) {
    try {
      const _0x549c40 = {
        taskCode: _0x432115.taskCode
      };
      let _0x6ecf1b = {
        fn: "anniversary2024_finishTask",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonRoutePost/memberEs/taskRecord/finishTask",
        headers: { ...this.getSign()
        },
        json: _0x549c40
      },
          {
        result: _0x24693f
      } = await this.request(_0x6ecf1b);
      _0x24693f?.["success"] ? (this.log("完成任务[" + _0x432115.taskName + "]成功"), await this.anniversary2024_fetchMixTaskReward(_0x432115)) : this.log("完成任务[" + _0x432115.taskName + "]失败: " + (_0x24693f?.["errorMessage"] || (_0x24693f ? JSON.stringify(_0x24693f) : "无返回")));
    } catch (_0x1bb541) {
      console.log(_0x1bb541);
    }
  }

  async anniversary2024_fetchMixTaskReward(_0x1972e0, _0xf7b8db = {}) {
    try {
      let _0x133662 = {
        fn: "anniversary2024_fetchMixTaskReward",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024TaskService~fetchMixTaskReward",
        headers: { ...this.getSign()
        },
        json: {
          taskType: _0x1972e0.taskType,
          activityCode: _0x3e39ad,
          channelType: "MINI_PROGRAM"
        }
      },
          {
        result: _0x4d36dc
      } = await this.request(_0x133662);

      if (_0x4d36dc?.["success"]) {
        let _0x2773ab = [],
            {
          receivedAccountList = [],
          turnedAward = {}
        } = _0x4d36dc?.["obj"]?.["account"];

        for (let _0x450b60 of receivedAccountList) {
          _0x2773ab.push("[" + _0x450b60.currency + "]X" + _0x450b60.amount);
        }

        turnedAward?.["productName"] && _0x2773ab.push("[优惠券]" + turnedAward?.["productName"]);
        this.log("领取任务[" + _0x1972e0.taskName + "]奖励: " + _0x2773ab.join(", "));
      } else {
        let _0x49ff58 = _0x4d36dc?.["errorMessage"] || (_0x4d36dc ? JSON.stringify(_0x4d36dc) : "无返回");

        this.log("领取任务[" + _0x1972e0.taskName + "]奖励失败: " + _0x49ff58);
        _0x49ff58?.["includes"]("用户手机号校验未通过") && (this.anniversary_black = true);
      }
    } catch (_0x4100be) {
      console.log(_0x4100be);
    }
  }

  async anniversary2024_unbox(_0x4661a1 = {}) {
    try {
      let _0x555984 = {
        fn: "anniversary2024_unbox",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024CardService~unbox",
        headers: { ...this.getSign()
        },
        json: {}
      },
          {
        result: _0x3594a9
      } = await this.request(_0x555984);

      if (_0x3594a9?.["success"]) {
        let _0x2e75b9 = [],
            _0x497733 = _0x3594a9?.["obj"]?.["account"]?.["receivedAccountList"] || [];

        for (let _0x539c15 of _0x497733) {
          _0x2e75b9.push("[" + _0x539c15.currency + "]X" + _0x539c15.amount);
        }

        this.log("拆盒子: " + (_0x2e75b9.join(", ") || "空气"));
      } else {
        let _0x1c5494 = _0x3594a9?.["errorMessage"] || (_0x3594a9 ? JSON.stringify(_0x3594a9) : "无返回");

        this.log("拆盒子失败: " + _0x1c5494);
        _0x1c5494?.["includes"]("用户手机号校验未通过") && (this.anniversary_black = true);
      }
    } catch (_0x1963e5) {
      console.log(_0x1963e5);
    }
  }

  async anniversary2024_game_list(_0x17b918 = {}) {
    try {
      let _0x30047f = {
        fn: "anniversary2024_game_list",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024GameParkService~list",
        headers: { ...this.getSign()
        },
        json: {}
      },
          {
        result: _0x5a0aa2
      } = await this.request(_0x30047f);

      if (_0x5a0aa2?.["success"]) {
        let {
          topicPKInfo: _0xefc76b,
          searchWordInfo: _0x526c15,
          happyEliminationInfo: _0x245fdd
        } = _0x5a0aa2?.["obj"];
        !_0xefc76b?.["isPassFlag"] && (this.log("开始话题PK赛"), await this.anniversary2024_TopicPk_topicList());

        if (!_0x526c15?.["isPassFlag"] || !_0x526c15?.["isFinishDailyFlag"]) {
          this.log("开始找字游戏");

          for (let _0x5cc1d9 = 1; _0x5cc1d9 <= 10; _0x5cc1d9++) {
            let _0x1a4293 = Math.floor(Math.random() * 2000) + 1000;

            await _0x469c15.wait(_0x1a4293);

            if (!(await this.anniversary2024_SearchWord_win(_0x5cc1d9))) {
              break;
            }
          }
        }

        if (!_0x245fdd?.["isPassFlag"] || !_0x245fdd?.["isFinishDailyFlag"]) {
          this.log("开始消消乐");

          for (let _0x5d5680 = 1; _0x5d5680 <= 30; _0x5d5680++) {
            let _0x3f3ca2 = Math.floor(Math.random() * 2000) + 1000;

            await _0x469c15.wait(_0x3f3ca2);

            if (!(await this.anniversary2024_HappyElimination_win(_0x5d5680))) {
              break;
            }
          }
        }
      } else {
        let _0x5a7478 = _0x5a0aa2?.["errorMessage"] || (_0x5a0aa2 ? JSON.stringify(_0x5a0aa2) : "无返回");

        this.log("查询游戏状态失败: " + _0x5a7478);
        _0x5a7478?.["includes"]("用户手机号校验未通过") && (this.anniversary_black = true);
      }
    } catch (_0x13a018) {
      console.log(_0x13a018);
    }
  }

  async anniversary2024_SearchWord_win(_0x29d2c4, _0x3615d8 = {}) {
    let _0x4a2c2b = true;

    try {
      const _0x558048 = {
        index: _0x29d2c4
      };
      let _0x2842fc = {
        fn: "anniversary2024_SearchWord_win",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024SearchWordService~win",
        headers: { ...this.getSign()
        },
        json: _0x558048
      },
          {
        result: _0xa2a212
      } = await this.request(_0x2842fc);

      if (_0xa2a212?.["success"]) {
        let {
          currencyDTOList = []
        } = _0xa2a212?.["obj"];

        if (currencyDTOList?.["length"]) {
          let _0x5a171a = [];

          for (let _0xedbc39 of currencyDTOList) {
            _0x5a171a.push("[" + _0xedbc39.currency + "]X" + _0xedbc39.amount);
          }

          this.log("找字游戏第" + _0x29d2c4 + "关通关成功: " + _0x5a171a.join(", "));
        } else {
          this.log("找字游戏第" + _0x29d2c4 + "关通关成功");
        }
      } else {
        let _0x485372 = _0xa2a212?.["errorMessage"] || (_0xa2a212 ? JSON.stringify(_0xa2a212) : "无返回");

        this.log("找字游戏第" + _0x29d2c4 + "关失败: " + _0x485372);
        _0x485372?.["includes"]("系统繁忙") && (_0x4a2c2b = false);
      }
    } catch (_0xe52c1b) {
      console.log(_0xe52c1b);
    } finally {
      return _0x4a2c2b;
    }
  }

  async anniversary2024_HappyElimination_win(_0x44141d, _0x5ea1e0 = {}) {
    let _0x2d9648 = true;

    try {
      const _0x264f83 = {
        index: _0x44141d
      };
      let _0x5a39ad = {
        fn: "anniversary2024_HappyElimination_win",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024HappyEliminationService~win",
        headers: { ...this.getSign()
        },
        json: _0x264f83
      },
          {
        result: _0x212c2a
      } = await this.request(_0x5a39ad);

      if (_0x212c2a?.["success"]) {
        let {
          isAward: _0x372b1d,
          currencyDTOList: _0x50a497
        } = _0x212c2a?.["obj"];

        if (_0x372b1d) {
          let _0x2d7600 = [];

          for (let _0x75e2ab of _0x50a497) {
            _0x2d7600.push("[" + _0x75e2ab.currency + "]X" + _0x75e2ab.amount);
          }

          this.log("消消乐第" + _0x44141d + "关通关成功: " + _0x2d7600.join(", "));
        } else {
          this.log("消消乐第" + _0x44141d + "关通关成功");
        }
      } else {
        let _0x21754f = _0x212c2a?.["errorMessage"] || (_0x212c2a ? JSON.stringify(_0x212c2a) : "无返回");

        this.log("消消乐第" + _0x44141d + "关失败: " + _0x21754f);
        _0x21754f?.["includes"]("系统繁忙") && (_0x2d9648 = false);
      }
    } catch (_0x552891) {
      console.log(_0x552891);
    } finally {
      return _0x2d9648;
    }
  }

  async anniversary2024_TopicPk_topicList(_0xfaf67c = {}) {
    try {
      let _0x4fefc4 = {
        fn: "anniversary2024_TopicPk_topicList",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024TopicPkService~topicList",
        headers: { ...this.getSign()
        },
        json: {}
      },
          {
        result: _0x39611b
      } = await this.request(_0x4fefc4);

      if (_0x39611b?.["success"]) {
        let _0x10bd17 = _0x39611b?.["obj"]?.["topics"] || [],
            _0x1f5e1d = _0x10bd17?.["filter"](_0x31c050 => !_0x31c050?.["choose"])?.[0]?.["index"] || 1;

        for (let _0x2c619a = parseInt(_0x1f5e1d); _0x2c619a <= 12; _0x2c619a++) {
          let _0x2fc6c5 = Math.floor(Math.random() * 2000) + 2000;

          await _0x469c15.wait(_0x2fc6c5);

          if (!(await this.anniversary2024_TopicPk_chooseSide(_0x2c619a))) {
            break;
          }
        }
      } else {
        let _0x46aae2 = _0x39611b?.["errorMessage"] || (_0x39611b ? JSON.stringify(_0x39611b) : "无返回");

        this.log("查询话题PK赛记录失败: " + _0x46aae2);
        _0x46aae2?.["includes"]("系统繁忙") && (this.anniversary_black = true);
      }
    } catch (_0x2cc0ab) {
      console.log(_0x2cc0ab);
    }
  }

  async anniversary2024_queryAccountStatus_refresh(_0xd74325 = {}) {
    try {
      let _0x4b6101 = {
        fn: "anniversary2024_queryAccountStatus_refresh",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024CardService~queryAccountStatus",
        headers: { ...this.getSign()
        },
        json: {}
      };
      await this.request(_0x4b6101);
    } catch (_0x53393d) {
      console.log(_0x53393d);
    }
  }

  async anniversary2024_TopicPk_chooseSide(_0x79fea7, _0x2d6222 = {}) {
    let _0x520661 = true;

    try {
      const _0x214c62 = {
        index: _0x79fea7,
        choose: 0
      };
      let _0x297064 = {
        fn: "anniversary2024_TopicPk_chooseSide",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024TopicPkService~chooseSide",
        headers: { ...this.getSign()
        },
        json: _0x214c62
      },
          {
        result: _0x4dd63d
      } = await this.request(_0x297064);

      if (_0x4dd63d?.["success"]) {
        let {
          currencyDTOList = []
        } = _0x4dd63d?.["obj"];

        if (currencyDTOList.length) {
          let _0x55b8b8 = [];

          for (let _0x4cbd92 of currencyDTOList) {
            _0x55b8b8.push("[" + _0x4cbd92.currency + "]X" + _0x4cbd92.amount);
          }

          this.log("话题PK赛第" + _0x79fea7 + "个话题选择成功: " + _0x55b8b8.join(", "));
        } else {
          this.log("话题PK赛第" + _0x79fea7 + "个话题选择成功");
        }
      } else {
        let _0x4efec9 = _0x4dd63d?.["errorMessage"] || (_0x4dd63d ? JSON.stringify(_0x4dd63d) : "无返回");

        this.log("话题PK赛第" + _0x79fea7 + "个话题失败: " + _0x4efec9);
        _0x4efec9?.["includes"]("系统繁忙") && (_0x520661 = false);
      }
    } catch (_0x5a1b4b) {
      console.log(_0x5a1b4b);
    } finally {
      return _0x520661;
    }
  }

  async anniversary2024_titleList(_0x1e8db3 = {}) {
    try {
      let _0x27500b = {
        fn: "anniversary2024_titleList",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024GuessService~titleList",
        headers: { ...this.getSign()
        },
        json: {}
      },
          {
        result: _0xad0c9
      } = await this.request(_0x27500b);

      if (_0xad0c9?.["success"]) {
        let {
          guessTitleInfoList = []
        } = _0xad0c9?.["obj"],
            _0x522573 = _0x469c15.time("yyyy-MM-dd"),
            _0x52598d = guessTitleInfoList.filter(_0x488d1e => _0x488d1e.gameDate == _0x522573);

        if (_0x52598d.length > 0) {
          let _0x38505c = _0x52598d[0];

          if (_0x38505c.answerStatus) {
            this.log("今日已回答过竞猜");
          } else {
            let _0x1482c2 = _0x10eea9?.["answer"]?.[_0x522573];

            _0x10eea9?.["answer"]?.[_0x522573] && (await this.anniversary2024_answer(_0x38505c, _0x1482c2));
          }
        } else {
          this.log("没有查询到今日竞猜题目");
        }
      } else {
        let _0x54c045 = _0xad0c9?.["errorMessage"] || (_0xad0c9 ? JSON.stringify(_0xad0c9) : "无返回");

        this.log("查询每日口令竞猜失败: " + _0x54c045);
      }
    } catch (_0x15003d) {
      console.log(_0x15003d);
    }
  }

  async anniversary2024_titleList_award(_0x151d74 = {}) {
    try {
      let _0x1ce00c = {
        fn: "anniversary2024_titleList_award",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024GuessService~titleList",
        headers: { ...this.getSign()
        },
        json: {}
      },
          {
        result: _0x198d13
      } = await this.request(_0x1ce00c);

      if (_0x198d13?.["success"]) {
        let {
          guessTitleInfoList = []
        } = _0x198d13?.["obj"],
            _0x410544 = _0x469c15.time("yyyy-MM-dd"),
            _0x369e22 = guessTitleInfoList.filter(_0x1303e3 => _0x1303e3.gameDate == _0x410544);

        if (_0x369e22.length > 0) {
          let _0x283bb8 = _0x369e22[0];

          if (_0x283bb8.answerStatus) {
            let _0x5c7be1 = [],
                {
              awardList = [],
              puzzleList = []
            } = _0x283bb8;
            _0x5c7be1 = _0x5c7be1.concat(awardList.map(_0x421714 => _0x421714.productName));
            _0x5c7be1 = _0x5c7be1.concat(puzzleList.map(_0x505723 => "[" + _0x505723.currency + "]X" + _0x505723.amount));
            const _0x4b68a1 = {
              notify: true
            };
            this.log("口令竞猜奖励: " + (_0x5c7be1.join(", ") || "空气"), _0x4b68a1);
          } else {
            this.log("今日还没回答竞猜");
          }
        } else {
          this.log("没有查询到今日竞猜奖励");
        }
      } else {
        let _0x102b45 = _0x198d13?.["errorMessage"] || (_0x198d13 ? JSON.stringify(_0x198d13) : "无返回");

        this.log("查询每日口令竞猜奖励失败: " + _0x102b45);
      }
    } catch (_0x1fd44c) {
      console.log(_0x1fd44c);
    }
  }

  async anniversary2024_answer(_0x567c27, _0x31d873, _0x34318a = {}) {
    try {
      const _0x10c25c = {
        period: _0x567c27.period,
        answerInfo: _0x31d873
      };
      let _0x7e089b = {
        fn: "anniversary2024_answer",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024GuessService~answer",
        headers: { ...this.getSign()
        },
        json: _0x10c25c
      },
          {
        result: _0x6e44eb
      } = await this.request(_0x7e089b);

      if (_0x6e44eb?.["success"]) {
        this.log("口令竞猜回答成功");
        await this.anniversary2024_titleList_award();
      } else {
        let _0x49a6a1 = _0x6e44eb?.["errorMessage"] || (_0x6e44eb ? JSON.stringify(_0x6e44eb) : "无返回");

        this.log("口令竞猜回答失败: " + _0x49a6a1);
      }
    } catch (_0x2191d7) {
      console.log(_0x2191d7);
    }
  }

  async anniversary2024_queryAccountStatus(_0x3c19e8 = {}) {
    try {
      let _0x49ac70 = {
        fn: "anniversary2024_queryAccountStatus",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024CardService~queryAccountStatus",
        headers: { ...this.getSign()
        },
        json: {}
      };
      {
        let {
          result: _0x4aee4d
        } = await this.request(_0x49ac70);

        if (_0x4aee4d?.["success"]) {
          let _0x1fcfbe = _0x4aee4d?.["obj"]?.["accountCurrencyList"] || [],
              _0x4eafd4 = _0x1fcfbe.filter(_0x177738 => _0x177738.currency == "UNBOX_CHANCE"),
              _0x3c6ec3 = _0x4eafd4?.[0]?.["balance"] || 0;

          this.log("可以拆" + _0x3c6ec3 + "次盒子");

          while (_0x3c6ec3-- > 0) {
            await this.anniversary2024_unbox();
          }
        } else {
          this.log("查询已收集拼图失败: " + (_0x4aee4d?.["errorMessage"] || (_0x4aee4d ? JSON.stringify(_0x4aee4d) : "无返回")));
        }
      }
      {
        let {
          result: _0x514010
        } = await this.request(_0x49ac70);

        if (_0x514010?.["success"]) {
          let _0x2d30bf = _0x514010?.["obj"]?.["accountCurrencyList"] || [];

          _0x2d30bf = _0x2d30bf.filter(_0x5e1b26 => _0x5e1b26.currency != "UNBOX_CHANCE");

          if (_0x2d30bf?.["length"]) {
            this.cards = _0x2d30bf;
            let _0xe4a5fe = [];

            for (let _0x11323c of this.cards) {
              _0xe4a5fe.push("[" + _0x11323c.currency + "]X" + _0x11323c.balance);
            }

            const _0x329d24 = {
              notify: true
            };
            this.log("拼图: " + _0xe4a5fe.join(", "), _0x329d24);
            this.cards.sort((_0xf1e8a1, _0x5ac8a5) => {
              return _0x5ac8a5.balance - _0xf1e8a1.balance;
            });
          } else {
            const _0x501756 = {
              notify: true
            };
            this.log("还没有收集到拼图", _0x501756);
          }
        } else {
          this.log("查询已收集拼图失败: " + (_0x514010?.["errorMessage"] || (_0x514010 ? JSON.stringify(_0x514010) : "无返回")));
        }
      }
    } catch (_0xbe5835) {
      console.log(_0xbe5835);
    }
  }

  async anniversary2024_queryAccountStatus_card(_0x378dee = {}) {
    try {
      let _0x595de6 = {
        fn: "anniversary2024_queryAccountStatus_card",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024CardService~queryAccountStatus",
        headers: { ...this.getSign()
        },
        json: {}
      },
          {
        result: _0x302243
      } = await this.request(_0x595de6);

      if (_0x302243?.["success"]) {
        let _0x4429f8 = _0x302243?.["obj"]?.["accountCurrencyList"] || [];

        _0x4429f8 = _0x4429f8.filter(_0x193ea5 => _0x193ea5.currency != "UNBOX_CHANCE");

        if (_0x4429f8?.["length"]) {
          this.cards = _0x4429f8.sort((_0x3096ff, _0x572173) => {
            return _0x572173.balance - _0x3096ff.balance;
          });
          let _0x4d33e7 = [];

          for (let _0x5c8d7f of this.cards) {
            _0x4d33e7.push("[" + _0x5c8d7f.currency + "]X" + _0x5c8d7f.balance);
          }

          const _0x5b3c93 = {
            notify: true
          };
          this.log("拼图: " + _0x4d33e7.join(", "), _0x5b3c93);

          while (this.cards.filter(_0x36d634 => _0x36d634.balance > 0).length >= 3 && !this.anniversary_black) {
            await this.anniversary2024_collectDrawAward();
          }
        } else {
          const _0x523b2f = {
            notify: true
          };
          this.log("还没有收集到拼图", _0x523b2f);
        }
      } else {
        this.log("查询已收集拼图失败: " + (_0x302243?.["errorMessage"] || (_0x302243 ? JSON.stringify(_0x302243) : "无返回")));
      }
    } catch (_0x5344b2) {
      console.log(_0x5344b2);
    }
  }

  async anniversary2024_collectDrawAward(_0x461795 = {}) {
    try {
      this.cards = this.cards.sort((_0x570138, _0xd17330) => {
        return _0xd17330.balance - _0x570138.balance;
      });

      let _0x457935 = this.cards.filter(_0x2f8618 => _0x2f8618.balance > 0).map(_0x3c7e49 => _0x3c7e49.currency);

      if (_0x457935.length == 9) {
        _0x457935 = _0x457935.slice(0, 9);
      } else {
        if (_0x457935.length >= 7) {
          _0x457935 = _0x457935.slice(0, 7);
        } else {
          if (_0x457935.length >= 5) {
            _0x457935 = _0x457935.slice(0, 5);
          } else {
            _0x457935.length >= 3 && (_0x457935 = _0x457935.slice(0, 3));
          }
        }
      }

      const _0x52d85d = {
        accountList: _0x457935
      };
      let _0x3f33aa = {
        fn: "anniversary2024_collectDrawAward",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024CardService~collectDrawAward",
        headers: { ...this.getSign()
        },
        json: _0x52d85d
      },
          {
        result: _0x194303
      } = await this.request(_0x3f33aa);

      if (_0x194303?.["success"]) {
        let {
          productName: _0x497e4b
        } = _0x194303?.["obj"];
        const _0x197b8f = {
          notify: true
        };
        this.log("使用" + _0x457935.length + "种卡合成: " + _0x497e4b, _0x197b8f);

        for (let _0x20bfd1 of this.cards) {
          _0x457935.includes(_0x20bfd1.currency) && (_0x20bfd1.balance -= 1);
        }
      } else {
        let _0x5a4ca9 = _0x194303?.["errorMessage"] || (_0x194303 ? JSON.stringify(_0x194303) : "无返回");

        this.log("使用" + _0x457935.length + "种年卡合成失败: " + _0x5a4ca9);
        _0x5a4ca9?.["includes"]("系统繁忙") && (this.anniversary_black = true);
      }
    } catch (_0x12c470) {
      console.log(_0x12c470);
    }
  }

  async dragonBoat2024_weeklyGiftStatus(_0x560ef9 = {}) {
    try {
      let _0x2c7bb5 = {
        fn: "dragonBoat2024_weeklyGiftStatus",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~dragonBoat2024IndexService~weeklyGiftStatus",
        headers: { ...this.getSign()
        },
        json: {}
      },
          {
        result: _0x5a9d91
      } = await this.request(_0x2c7bb5);

      if (_0x5a9d91?.["success"]) {
        let _0x94d905 = _0x5a9d91?.["obj"] || [];

        for (let _0x2db850 of _0x94d905) {
          if (!_0x2db850.received) {
            let _0x449c99 = new Date(_0x2db850.receiveStartTime),
                _0x2fb4f5 = new Date(_0x2db850.receiveEndTime),
                _0x47acd2 = Date.now();

            _0x47acd2 >= _0x449c99.getTime() && _0x47acd2 <= _0x2fb4f5.getTime() && (await this.dragonBoat2024_receiveWeeklyGift());
          }
        }
      } else {
        let _0x1dda31 = _0x5a9d91?.["errorMessage"] || (_0x5a9d91 ? JSON.stringify(_0x5a9d91) : "无返回");

        this.log("端午查询每周领券失败: " + _0x1dda31);
        (_0x1dda31?.["includes"]("系统繁忙") || _0x1dda31?.["includes"]("用户手机号校验未通过")) && (this.dragonBoat_black = true);
      }
    } catch (_0x20566b) {
      console.log(_0x20566b);
    }
  }

  async dragonBoat2024_receiveWeeklyGift(_0xda28e2 = {}) {
    try {
      let _0x7d15a6 = _0x469c15.randomList(_0xa04af7.filter(_0x4e81b1 => _0x4e81b1 != this.userId)),
          _0x5424cc = {
        fn: "dragonBoat2024_receiveWeeklyGift",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~dragonBoat2024IndexService~receiveWeeklyGift",
        headers: { ...this.getSign()
        },
        json: {
          inviteUserId: _0x7d15a6,
          moduleType: "welfare_card"
        }
      },
          {
        result: _0x461068
      } = await this.request(_0x5424cc);

      if (_0x461068?.["success"]) {
        let _0x15888e = _0x461068?.["obj"]?.["map"](_0x1a460d => _0x1a460d.productName);

        this.log("端午每周领券: " + _0x15888e.join(", "));
      } else {
        let _0x2b9272 = _0x461068?.["errorMessage"] || (_0x461068 ? JSON.stringify(_0x461068) : "无返回");

        this.log("端午每周领券失败: " + _0x2b9272);
        (_0x2b9272?.["includes"]("系统繁忙") || _0x2b9272?.["includes"]("用户手机号校验未通过")) && (this.dragonBoat_black = true);
      }
    } catch (_0x42c561) {
      console.log(_0x42c561);
    }
  }

  async dragonBoat2024_taskList(_0x4a93ca = {}) {
    try {
      let _0x1ca4b7 = {
        fn: "dragonBoat2024_taskList",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~activityTaskService~taskList",
        headers: { ...this.getSign()
        },
        json: {
          activityCode: _0x4b8b7f,
          channelType: "MINI_PROGRAM"
        }
      },
          {
        result: _0x3c8930
      } = await this.request(_0x1ca4b7);

      if (_0x3c8930?.["success"]) {
        let _0x187235 = _0x3c8930?.["obj"] || [];

        for (let _0x197f37 of _0x187235.filter(_0x421dca => _0x421dca.status == 1)) {
          if (this.dragonBoat_black) {
            return;
          }

          for (let _0x22fa97 = 0; _0x22fa97 < _0x197f37.canReceiveTokenNum; _0x22fa97++) {
            await this.dragonBoat2024_fetchMixTaskReward(_0x197f37);
          }
        }

        for (let _0x253b16 of _0x187235.filter(_0x5b60b5 => _0x5b60b5.status == 2)) {
          if (this.dragonBoat_black) {
            return;
          }

          switch (_0x253b16.taskType) {
            case "PLAY_ACTIVITY_GAME":
            case "FIRST_CHARGE_NEW_EXPRESS_CARD":
            case "SEND_SUCCESS_RECALL":
            case "OPEN_SVIP":
            case "CHARGE_NEW_EXPRESS_CARD":
            case "INTEGRAL_EXCHANGE":
              {
                break;
              }

            default:
              {
                for (let _0x61430f = 0; _0x61430f < _0x253b16.restFinishTime && !this.dragonBoat_black; _0x61430f++) {
                  await this.dragonBoat2024_finishTask(_0x253b16);
                }

                break;
              }
          }
        }
      } else {
        this.log("端午查询任务失败: " + (_0x3c8930?.["errorMessage"] || (_0x3c8930 ? JSON.stringify(_0x3c8930) : "无返回")));
      }
    } catch (_0x5a71ac) {
      console.log(_0x5a71ac);
    }
  }

  async dragonBoat2024_finishTask(_0x8b9e8b, _0xb7224 = {}) {
    try {
      const _0x505bf9 = {
        taskCode: _0x8b9e8b.taskCode
      };
      let _0x2dfc03 = {
        fn: "dragonBoat2024_finishTask",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberEs~taskRecord~finishTask",
        headers: { ...this.getSign()
        },
        json: _0x505bf9
      },
          {
        result: _0x10b04a
      } = await this.request(_0x2dfc03);
      _0x10b04a?.["success"] ? (this.log("端午完成任务[" + _0x8b9e8b.taskName + "]成功"), await this.dragonBoat2024_fetchMixTaskReward(_0x8b9e8b)) : this.log("端午完成任务[" + _0x8b9e8b.taskName + "]失败: " + (_0x10b04a?.["errorMessage"] || (_0x10b04a ? JSON.stringify(_0x10b04a) : "无返回")));
    } catch (_0xa074ea) {
      console.log(_0xa074ea);
    }
  }

  dragonBoat2024_parse_item(_0x56d8cf) {
    let _0x444177 = [];

    for (let _0x34fe40 of _0x56d8cf) {
      let _0x1bdcf8 = _0x34fe40.currency,
          _0xd3c5a7 = _0x10e192[_0x1bdcf8] || "[" + _0x1bdcf8 + "]",
          _0x55ce4a = _0x34fe40.balance || _0x34fe40.amount || 0;

      const _0x2cf848 = {
        currency: _0x1bdcf8,
        type: _0xd3c5a7,
        amount: _0x55ce4a
      };

      _0x444177.push(_0x2cf848);
    }

    return _0x444177;
  }

  async dragonBoat2024_fetchMixTaskReward(_0x4a899f, _0x119bd0 = {}) {
    try {
      let _0x11545b = {
        fn: "dragonBoat2024_fetchMixTaskReward",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~dragonBoat2024TaskService~fetchTasksReward",
        headers: { ...this.getSign()
        },
        json: {}
      },
          {
        result: _0x27a881
      } = await this.request(_0x11545b);

      if (_0x27a881?.["success"]) {
        let _0xd08be7 = this.dragonBoat2024_parse_item(_0x27a881?.["obj"]?.["receivedAccountList"] || []);

        _0xd08be7 = _0xd08be7.map(_0x317d4f => _0x317d4f.type + "x" + _0x317d4f.amount);
        this.log("端午领取任务[" + _0x4a899f.taskName + "]奖励: " + _0xd08be7.join(", "));
      } else {
        let _0x4e17a6 = _0x27a881?.["errorMessage"] || (_0x27a881 ? JSON.stringify(_0x27a881) : "无返回");

        this.log("端午领取任务[" + _0x4a899f.taskName + "]奖励失败: " + _0x4e17a6);
        _0x4e17a6?.["includes"]("用户手机号校验未通过") && (this.dragonBoat_black = true);
      }
    } catch (_0x5465aa) {
      console.log(_0x5465aa);
    }
  }

  async dragonBoat2024_game_indexInfo(_0x5330f1 = {}) {
    try {
      let _0x2e6ad5 = {
        fn: "dragonBoat2024_game_indexInfo",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~dragonBoat2024GameService~indexInfo",
        headers: { ...this.getSign()
        },
        json: {}
      },
          {
        result: _0x5c95de
      } = await this.request(_0x2e6ad5);

      if (_0x5c95de?.["success"]) {
        let _0x101334 = _0x5c95de?.["obj"]?.["ifPassAllLevel"];

        await this.dragonBoat2024_game_init(_0x101334);
      } else {
        let _0x17d856 = _0x5c95de?.["errorMessage"] || (_0x5c95de ? JSON.stringify(_0x5c95de) : "无返回");

        this.log("端午查询游戏状态失败: " + _0x17d856);
        _0x17d856?.["includes"]("用户手机号校验未通过") && (this.dragonBoat_black = true);
      }
    } catch (_0x32f9fe) {
      console.log(_0x32f9fe);
    }
  }

  async dragonBoat2024_game_init(_0x5f4b9d, _0x487c22 = {}) {
    try {
      let _0x831c0d = {
        fn: "dragonBoat2024_game_init",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~dragonBoat2024GameService~init",
        headers: { ...this.getSign()
        },
        json: {}
      },
          {
        result: _0xe20b80
      } = await this.request(_0x831c0d);

      if (_0xe20b80?.["success"]) {
        let {
          gotPushTimeOfToday: _0x4e7fd0,
          currentIndex: _0x17f0c8
        } = _0xe20b80?.["obj"],
            _0x2aa77e = 0;

        if (!_0x5f4b9d) {
          _0x2aa77e = 30;
        } else {
          _0x4e7fd0 < 3 && (_0x2aa77e = 3 * (3 - _0x4e7fd0));
        }

        if (_0x2aa77e > 0) {
          this.log("端午划龙舟, 目标: " + _0x2aa77e + "关");

          let _0x361e63 = Math.min(_0x2aa77e + _0x17f0c8, 30);

          for (let _0x51c9c1 = _0x17f0c8; _0x51c9c1 <= _0x361e63; _0x51c9c1++) {
            let _0x120db8 = Math.floor(Math.random() * 2000) + 2000;

            await _0x469c15.wait(_0x120db8);

            if (!(await this.dragonBoat2024_boat_win(_0x51c9c1))) {
              break;
            }
          }
        }
      } else {
        let _0x3ada25 = _0xe20b80?.["errorMessage"] || (_0xe20b80 ? JSON.stringify(_0xe20b80) : "无返回");

        this.log("端午查询游戏状态失败: " + _0x3ada25);
        _0x3ada25?.["includes"]("用户手机号校验未通过") && (this.dragonBoat_black = true);
      }
    } catch (_0x55b3bd) {
      console.log(_0x55b3bd);
    }
  }

  async dragonBoat2024_boat_win(_0x5681b5 = 1, _0xee851e = {}) {
    let _0x4e9c2c = true;

    try {
      const _0x868cde = {
        levelIndex: _0x5681b5
      };
      let _0x50da18 = {
        fn: "dragonBoat2024_boat_win",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~dragonBoat2024GameService~win",
        headers: { ...this.getSign()
        },
        json: _0x868cde
      },
          {
        result: _0x9e4bd0
      } = await this.request(_0x50da18);

      if (_0x9e4bd0?.["success"]) {
        let _0x4cbc59 = this.dragonBoat2024_parse_item(_0x9e4bd0?.["obj"]?.["currentAwardList"] || []);

        _0x4cbc59 = _0x4cbc59.map(_0x7cfa93 => _0x7cfa93.type + "x" + _0x7cfa93.amount);
        _0x4cbc59.length ? this.log("端午划龙舟第" + _0x5681b5 + "关通关成功: " + _0x4cbc59.join(", ")) : this.log("端午划龙舟第" + _0x5681b5 + "关通关成功");
      } else {
        let _0x4b85e0 = _0x9e4bd0?.["errorMessage"] || (_0x9e4bd0 ? JSON.stringify(_0x9e4bd0) : "无返回");

        this.log("端午划龙舟第" + _0x5681b5 + "关失败: " + _0x4b85e0);
        _0x4b85e0?.["includes"]("系统繁忙") && (_0x4e9c2c = false);
      }
    } catch (_0x5e7e24) {
      console.log(_0x5e7e24);
    } finally {
      return _0x4e9c2c;
    }
  }

  async dragonBoat2024_coinStatus(_0x160afe = {}) {
    try {
      let _0x544084 = {
        fn: "dragonBoat2024_coinStatus",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~dragonBoat2024CoinService~coinStatus",
        headers: { ...this.getSign()
        },
        json: {}
      };
      {
        let {
          result: _0x5cd422
        } = await this.request(_0x544084);

        if (_0x5cd422?.["success"]) {
          let _0x39bd64 = _0x5cd422?.["obj"]?.["accountCurrencyList"] || [],
              _0xf24fe6 = _0x39bd64.filter(_0x3465d3 => _0x3465d3.currency == "PUSH_TIMES"),
              _0x5b7c28 = _0xf24fe6?.[0]?.["balance"] || 0;

          this.log("端午可以推" + _0x5b7c28 + "次金币");

          while (_0x5b7c28-- > 0) {
            await this.dragonBoat2024_pushCoin();
          }
        } else {
          this.log("端午查询推金币状态失败: " + (_0x5cd422?.["errorMessage"] || (_0x5cd422 ? JSON.stringify(_0x5cd422) : "无返回")));
        }
      }
      {
        let {
          result: _0x2744da
        } = await this.request(_0x544084);

        if (_0x2744da?.["success"]) {
          let {
            accountCurrencyList = [],
            pushedTimesToday: _0x410cda,
            pushedTimesTotal: _0x48d702
          } = _0x2744da?.["obj"],
              _0x96f7b0 = this.dragonBoat2024_parse_item(accountCurrencyList),
              _0x4d4006 = _0x96f7b0.filter(_0x4e4f41 => _0x4e4f41.currency == "COIN"),
              _0x253bd8 = _0x96f7b0.filter(_0x436f2a => _0x436f2a.currency == "RICH_CARD_GAME");

          this.coin = _0x4d4006?.[0]?.["amount"] || 0;
          this.rich_card = _0x253bd8?.[0]?.["amount"] || 0;
          const _0xfba1e7 = {
            notify: true
          };
          this.log("端午金币: " + this.coin + ", 发财卡: " + this.rich_card, _0xfba1e7);

          let _0x9f1528 = Math.floor(this.coin / 230),
              _0x19d8fc = Math.min(_0x9f1528, this.rich_card);

          this.log("端午可以抽发财卡池" + _0x19d8fc + "次");

          while (_0x19d8fc-- > 0) {
            await this.dragonBoat2024_prizeDraw(4);
          }
        } else {
          this.log("端午查询金币失败: " + (_0x2744da?.["errorMessage"] || (_0x2744da ? JSON.stringify(_0x2744da) : "无返回")));
        }
      }
    } catch (_0x1d9b4e) {
      console.log(_0x1d9b4e);
    }
  }

  async dragonBoat2024_givePushTimes(_0x3a95cf = {}) {
    let _0x5e26eb = true;

    try {
      let _0x40ab62 = {
        fn: "dragonBoat2024_givePushTimes",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~dragonBoat2024CoinService~givePushTimes",
        headers: { ...this.getSign()
        },
        json: {}
      };
      await this.request(_0x40ab62);
    } catch (_0x121676) {
      console.log(_0x121676);
    } finally {
      return _0x5e26eb;
    }
  }

  async dragonBoat2024_pushCoin(_0x76600c = {}) {
    try {
      const _0x576bdb = {
        plateToken: null
      };
      let _0x314def = {
        fn: "dragonBoat2024_pushCoin",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~dragonBoat2024CoinService~pushCoin",
        headers: { ...this.getSign()
        },
        json: _0x576bdb
      },
          {
        result: _0x529282
      } = await this.request(_0x314def);

      if (_0x529282?.["success"]) {
        let _0x3a7507 = this.dragonBoat2024_parse_item(_0x529282?.["obj"]?.["receivedAccountList"] || []);

        _0x3a7507 = _0x3a7507.map(_0x4c8bf1 => _0x4c8bf1.type + "x" + _0x4c8bf1.amount);
        _0x3a7507.length ? this.log("端午推金币成功: " + _0x3a7507.join(", ")) : this.log("端午推金币成功, 没有获得奖品");
      } else {
        this.log("端午推金币失败: " + (_0x529282?.["errorMessage"] || (_0x529282 ? JSON.stringify(_0x529282) : "无返回")));
      }
    } catch (_0x4768f7) {
      console.log(_0x4768f7);
    }
  }

  async dragonBoat2024_prizeDraw(_0x4acb3d, _0x1749b2 = {}) {
    try {
      const _0x1f12e1 = {
        drawType: _0x4acb3d
      };
      let _0x29cafc = {
        fn: "dragonBoat2024_prizeDraw",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~dragonBoat2024LotteryService~prizeDraw",
        headers: { ...this.getSign()
        },
        json: _0x1f12e1
      },
          {
        result: _0xf0830d
      } = await this.request(_0x29cafc);

      if (_0xf0830d?.["success"]) {
        let {
          giftBagName: _0x2241ce,
          giftBagDesc: _0x6a493f
        } = _0xf0830d?.["obj"];
        const _0x54dc8b = {
          notify: true
        };
        this.log("端午奖池[" + _0x4acb3d + "]抽奖: [" + _0x2241ce + "]" + _0x6a493f, _0x54dc8b);
      } else {
        this.log("端午奖池[" + _0x4acb3d + "]抽奖失败: " + (_0xf0830d?.["errorMessage"] || (_0xf0830d ? JSON.stringify(_0xf0830d) : "无返回")));
      }
    } catch (_0x3de053) {
      console.log(_0x3de053);
    }
  }

  async anniversary2024_task(_0x872b64 = {}) {
    await this.anniversary2024_weeklyGiftStatus();

    if (this.anniversary_black) {
      return;
    }

    await this.anniversary2024_game_list();
    await this.anniversary2024_taskList();
    await this.anniversary2024_queryAccountStatus();
  }

  async anniversary2024_draw_task(_0x307ff6 = {}) {
    await this.anniversary2024_queryAccountStatus_card();
  }

  async dragonBoat2024_task(_0x35728d = {}) {
    let _0x565444 = Date.now();

    if (_0x565444 < 1716516000000 || _0x565444 > 1718190000000) {
      return;
    }

    await this.dragonBoat2024_weeklyGiftStatus();

    if (this.dragonBoat_black) {
      return;
    }

    await this.dragonBoat2024_game_indexInfo();
    await this.dragonBoat2024_taskList();
    await this.dragonBoat2024_givePushTimes();
    await this.dragonBoat2024_coinStatus();
  }

  async memberDay_task(_0x10dc2c = {}) {
    let _0x2dfb9d = new Date().getDate();

    _0x2dfb9d >= 26 && _0x2dfb9d <= 28 && (await this.memberDay_index());
  }

  async userTask(_0x1e0f25 = {}) {
    _0x469c15.log("\n-------------- 账号[" + this.index + "] --------------");

    if (!(await this.refresh_cookie())) {
      return;
    }

    await this.superWelfare_receiveRedPacket();
    await this.automaticSignFetchPackage();

    if (_0x2f8052 == "true") {
      await this.bee_indexData();
    }

    await this.memberDay_task();
    await this.dragonBoat2024_task();
    await this.coupon_list();
  }

}

!(async () => {
  if (!(await _0x12c650())) {
    return;
  }

  await _0x525aec();

  _0x469c15.read_env(_0x572068);

  let _0x4bf3a1 = _0x2f8052 == "true" ? "运行" : "不运行";

  _0x469c15.log("");

  const _0x57d963 = {
    notify: true
  };

  _0x469c15.log("采蜜游戏目前设置为: " + _0x4bf3a1, _0x57d963);

  _0x469c15.log("");

  for (let _0xeaccf4 of _0x469c15.userList) {
    await _0xeaccf4.userTask();
  }
})().catch(_0x565e5f => _0x469c15.log(_0x565e5f)).finally(() => _0x469c15.exitNow());

async function _0x12c650(_0x1e1783 = 0) {
  let _0x3248ca = false;

  try {
    const _0x31d539 = {
      fn: "auth",
      method: "get",
      url: _0x5c3b1f,
      timeout: 20000
    };
    let {
      statusCode: _0x268de2,
      result: _0x48b63b
    } = await _0x58d260.request(_0x31d539);

    if (_0x268de2 != 200) {
      _0x1e1783++ < _0x23be14 && (_0x3248ca = await _0x12c650(_0x1e1783));
      return _0x3248ca;
    }

    if (_0x48b63b?.["code"] == 0) {
      _0x48b63b = JSON.parse(_0x48b63b.data.file.data);

      if (_0x48b63b?.["commonNotify"] && _0x48b63b.commonNotify.length > 0) {
        const _0x1566da = {
          notify: true
        };

        _0x469c15.log(_0x48b63b.commonNotify.join("\n") + "\n", _0x1566da);
      }

      _0x48b63b?.["commonMsg"] && _0x48b63b.commonMsg.length > 0 && _0x469c15.log(_0x48b63b.commonMsg.join("\n") + "\n");

      if (_0x48b63b[_0x3a9229]) {
        let _0xac454 = _0x48b63b[_0x3a9229];
        _0xac454.status == 0 ? _0x56c444 >= _0xac454.version ? (_0x3248ca = true, _0x469c15.log(_0xac454.msg[_0xac454.status]), _0x469c15.log(_0xac454.updateMsg), _0x469c15.log("现在运行的脚本版本是：" + _0x56c444 + "，最新脚本版本：" + _0xac454.latestVersion)) : _0x469c15.log(_0xac454.versionMsg) : _0x469c15.log(_0xac454.msg[_0xac454.status]);
      } else {
        _0x469c15.log(_0x48b63b.errorMsg);
      }
    } else {
      _0x1e1783++ < _0x23be14 && (_0x3248ca = await _0x12c650(_0x1e1783));
    }
  } catch (_0x2a298a) {
    _0x469c15.log(_0x2a298a);
  } finally {
    return _0x3248ca;
  }
}

async function _0x525aec() {
  let _0x45bf2e = false;

  try {
    const _0x4f66b0 = {
      fn: "auth",
      method: "get",
      url: _0x4640ec
    };
    let {
      statusCode: _0x1d3263,
      result: _0x2f06f9
    } = await _0x58d260.request(_0x4f66b0);

    if (_0x1d3263 != 200) {
      return Promise.resolve();
    }

    _0x2f06f9?.["code"] == 0 && (_0x2f06f9 = JSON.parse(_0x2f06f9.data.file.data), _0xa04af7 = _0x2f06f9?.["inviteUserId"] || _0xa04af7, _0x10eea9 = _0x2f06f9?.["anniversary_2024"] || _0x10eea9);
  } catch (_0x5782fb) {
    _0x469c15.log(_0x5782fb);
  } finally {
    return _0x45bf2e;
  }
}

function _0x5481f1(_0xc37a79) {
  return new class {
    constructor(_0x297e65) {
      this.name = _0x297e65;
      this.startTime = Date.now();
      const _0x226386 = {
        time: true
      };
      this.log("[" + this.name + "]开始运行\n", _0x226386);
      this.notifyStr = [];
      this.notifyFlag = true;
      this.userIdx = 0;
      this.userList = [];
      this.userCount = 0;
      this.default_timestamp_len = 13;
      this.default_wait_interval = 1000;
      this.default_wait_limit = 3600000;
      this.default_wait_ahead = 0;
    }

    log(_0x390993, _0x282f0b = {}) {
      const _0x1c2a56 = {
        console: true
      };
      Object.assign(_0x1c2a56, _0x282f0b);

      if (_0x1c2a56.time) {
        let _0x491470 = _0x1c2a56.fmt || "hh:mm:ss";

        _0x390993 = "[" + this.time(_0x491470) + "]" + _0x390993;
      }

      if (_0x1c2a56.notify) {
        this.notifyStr.push(_0x390993);
      }

      if (_0x1c2a56.console) {
        console.log(_0x390993);
      }
    }

    get(_0x40f71d, _0x16c763, _0x36161a = "") {
      let _0x32ffd5 = _0x36161a;
      _0x40f71d?.["hasOwnProperty"](_0x16c763) && (_0x32ffd5 = _0x40f71d[_0x16c763]);
      return _0x32ffd5;
    }

    pop(_0x4c996f, _0x9a76a1, _0x591f90 = "") {
      let _0x273388 = _0x591f90;
      _0x4c996f?.["hasOwnProperty"](_0x9a76a1) && (_0x273388 = _0x4c996f[_0x9a76a1], delete _0x4c996f[_0x9a76a1]);
      return _0x273388;
    }

    copy(_0x181c3d) {
      return Object.assign({}, _0x181c3d);
    }

    read_env(_0x380570) {
      let _0x8e7185 = _0x49ab33.map(_0x19f14c => process.env[_0x19f14c]);

      for (let _0x48029c of _0x8e7185.filter(_0x4318cb => !!_0x4318cb)) {
        for (let _0x25dab1 of _0x48029c.split(_0x15b57d).filter(_0xf97281 => !!_0xf97281)) {
          _0x25dab1=decodeURIComponent(_0x25dab1)
          if (this.userList.includes(_0x25dab1)) {
            continue;
          }

          this.userList.push(new _0x380570(_0x25dab1));
        }
      }

      this.userCount = this.userList.length;

      if (!this.userCount) {
        const _0x16c7c9 = {
          notify: true
        };
        this.log("未找到变量，请检查变量" + _0x49ab33.map(_0x538f79 => "[" + _0x538f79 + "]").join("或"), _0x16c7c9);
        return false;
      }

      this.log("共找到" + this.userCount + "个账号");
      return true;
    }

    async threads(_0xf868cd, _0xe94c68, _0x915435 = {}) {
      while (_0xe94c68.idx < _0x469c15.userList.length) {
        let _0x4f9c39 = _0x469c15.userList[_0xe94c68.idx++];

        if (!_0x4f9c39.valid) {
          continue;
        }

        await _0x4f9c39[_0xf868cd](_0x915435);
      }
    }

    async threadTask(_0x20a7d4, _0x2e935f) {
      let _0x33188f = [];
      const _0x45b4f5 = {
        idx: 0
      };

      while (_0x2e935f--) {
        _0x33188f.push(this.threads(_0x20a7d4, _0x45b4f5));
      }

      await Promise.all(_0x33188f);
    }

    time(_0x4f7d8e, _0x2df578 = null) {
      let _0x313894 = _0x2df578 ? new Date(_0x2df578) : new Date(),
          _0x4b1235 = {
        "M+": _0x313894.getMonth() + 1,
        "d+": _0x313894.getDate(),
        "h+": _0x313894.getHours(),
        "m+": _0x313894.getMinutes(),
        "s+": _0x313894.getSeconds(),
        "q+": Math.floor((_0x313894.getMonth() + 3) / 3),
        S: this.padStr(_0x313894.getMilliseconds(), 3)
      };

      /(y+)/.test(_0x4f7d8e) && (_0x4f7d8e = _0x4f7d8e.replace(RegExp.$1, (_0x313894.getFullYear() + "").substr(4 - RegExp.$1.length)));

      for (let _0x5d9fa3 in _0x4b1235) new RegExp("(" + _0x5d9fa3 + ")").test(_0x4f7d8e) && (_0x4f7d8e = _0x4f7d8e.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x4b1235[_0x5d9fa3] : ("00" + _0x4b1235[_0x5d9fa3]).substr(("" + _0x4b1235[_0x5d9fa3]).length)));

      return _0x4f7d8e;
    }

    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }

      if (!this.notifyStr.length) {
        return;
      }

      var _0x2adcf8 = require("./sendNotify");

      this.log("\n============== 推送 ==============");
      await _0x2adcf8.sendNotify(this.name, this.notifyStr.join("\n"));
    }

    padStr(_0x3af3dc, _0x48eb12, _0xd73d6f = {}) {
      let _0x1c30f8 = _0xd73d6f.padding || "0",
          _0x3af1f5 = _0xd73d6f.mode || "l",
          _0x4e8cee = String(_0x3af3dc),
          _0x41f8b1 = _0x48eb12 > _0x4e8cee.length ? _0x48eb12 - _0x4e8cee.length : 0,
          _0x552e3a = "";

      for (let _0x272787 = 0; _0x272787 < _0x41f8b1; _0x272787++) {
        _0x552e3a += _0x1c30f8;
      }

      _0x3af1f5 == "r" ? _0x4e8cee = _0x4e8cee + _0x552e3a : _0x4e8cee = _0x552e3a + _0x4e8cee;
      return _0x4e8cee;
    }

    json2str(_0x447f2b, _0x57b5ad, _0xf1586 = false) {
      let _0x3d2989 = [];

      for (let _0x5b67ef of Object.keys(_0x447f2b).sort()) {
        let _0x44d5bb = _0x447f2b[_0x5b67ef];

        if (_0x44d5bb && _0xf1586) {
          _0x44d5bb = encodeURIComponent(_0x44d5bb);
        }

        _0x3d2989.push(_0x5b67ef + "=" + _0x44d5bb);
      }

      return _0x3d2989.join(_0x57b5ad);
    }

    str2json(_0xf9063b, _0x341e88 = false) {
      let _0x3842a1 = {};

      for (let _0x524c4f of _0xf9063b.split("&")) {
        if (!_0x524c4f) {
          continue;
        }

        let _0x223b4d = _0x524c4f.indexOf("=");

        if (_0x223b4d == -1) {
          continue;
        }

        let _0x15f2ae = _0x524c4f.substr(0, _0x223b4d),
            _0x210bb0 = _0x524c4f.substr(_0x223b4d + 1);

        if (_0x341e88) {
          _0x210bb0 = decodeURIComponent(_0x210bb0);
        }

        _0x3842a1[_0x15f2ae] = _0x210bb0;
      }

      return _0x3842a1;
    }

    randomPattern(_0x17125d, _0x3cd120 = "abcdef0123456789") {
      let _0x52818f = "";

      for (let _0x550f30 of _0x17125d) {
        if (_0x550f30 == "x") {
          _0x52818f += _0x3cd120.charAt(Math.floor(Math.random() * _0x3cd120.length));
        } else {
          _0x550f30 == "X" ? _0x52818f += _0x3cd120.charAt(Math.floor(Math.random() * _0x3cd120.length)).toUpperCase() : _0x52818f += _0x550f30;
        }
      }

      return _0x52818f;
    }

    randomUuid() {
      return this.randomPattern("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    }

    randomString(_0x356c0f, _0x913355 = "abcdef0123456789") {
      let _0x29dc45 = "";

      for (let _0x36b916 = 0; _0x36b916 < _0x356c0f; _0x36b916++) {
        _0x29dc45 += _0x913355.charAt(Math.floor(Math.random() * _0x913355.length));
      }

      return _0x29dc45;
    }

    randomList(_0x50e908) {
      if (!_0x50e908.length) {
        return null;
      }

      let _0x983396 = Math.floor(Math.random() * _0x50e908.length);

      return _0x50e908[_0x983396];
    }

    wait(_0x59f424) {
      return new Promise(_0x23b2ce => setTimeout(_0x23b2ce, 1500));
    }

    async exitNow() {
      await this.showmsg();

      let _0x3f1ee8 = Date.now(),
          _0x468b5e = (_0x3f1ee8 - this.startTime) / 1000;

      this.log("");
      const _0x4c6025 = {
        time: true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + _0x468b5e + "秒", _0x4c6025);
      process.exit(0);
    }

    normalize_time(_0x5dff69, _0x2e959c = {}) {
      let _0x16a7c4 = _0x2e959c.len || this.default_timestamp_len;

      _0x5dff69 = _0x5dff69.toString();
      let _0x4e4ad6 = _0x5dff69.length;

      while (_0x4e4ad6 < _0x16a7c4) {
        _0x5dff69 += "0";
      }

      _0x4e4ad6 > _0x16a7c4 && (_0x5dff69 = _0x5dff69.slice(0, 13));
      return parseInt(_0x5dff69);
    }

    async wait_until(_0x5c3543, _0x227b81 = {}) {
      let _0x3deb51 = _0x227b81.logger || this,
          _0xd16205 = _0x227b81.interval || this.default_wait_interval,
          _0x5c08b9 = _0x227b81.limit || this.default_wait_limit,
          _0x30c31e = _0x227b81.ahead || this.default_wait_ahead;

      if (typeof _0x5c3543 == "string" && _0x5c3543.includes(":")) {
        if (_0x5c3543.includes("-")) {
          _0x5c3543 = new Date(_0x5c3543).getTime();
        } else {
          let _0x42d11f = this.time("yyyy-MM-dd ");

          _0x5c3543 = new Date(_0x42d11f + _0x5c3543).getTime();
        }
      }

      let _0x521544 = this.normalize_time(_0x5c3543) - _0x30c31e,
          _0xaff862 = this.time("hh:mm:ss.S", _0x521544),
          _0x31839a = Date.now();

      _0x31839a > _0x521544 && (_0x521544 += 86400000);

      let _0x48a88e = _0x521544 - _0x31839a;

      if (_0x48a88e > _0x5c08b9) {
        const _0x23ffaa = {
          time: true
        };

        _0x3deb51.log("离目标时间[" + _0xaff862 + "]大于" + _0x5c08b9 / 1000 + "秒,不等待", _0x23ffaa);
      } else {
        const _0x23b877 = {
          time: true
        };

        _0x3deb51.log("离目标时间[" + _0xaff862 + "]还有" + _0x48a88e / 1000 + "秒,开始等待", _0x23b877);

        while (_0x48a88e > 0) {
          let _0x2cf1b3 = Math.min(_0x48a88e, _0xd16205);

          await this.wait(_0x2cf1b3);
          _0x31839a = Date.now();
          _0x48a88e = _0x521544 - _0x31839a;
        }

        const _0x1a9223 = {
          time: true
        };

        _0x3deb51.log("已完成等待", _0x1a9223);
      }
    }

    async wait_gap_interval(_0x2ee580, _0x3d49ff) {
      let _0x404cee = Date.now() - _0x2ee580;

      _0x404cee < _0x3d49ff && (await this.wait(_0x3d49ff - _0x404cee));
    }

  }(_0xc37a79);
}

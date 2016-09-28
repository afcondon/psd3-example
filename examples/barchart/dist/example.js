(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Generated by psc-bundle 0.9.2
var PS = {};
(function(exports) {
  // Generated by psc version 0.9.2
  "use strict";
  var Control_Category = PS["Control.Category"];
  var applyFlipped = function (x) {
      return function (f) {
          return f(x);
      };
  };
  exports["applyFlipped"] = applyFlipped;
})(PS["Data.Function"] = PS["Data.Function"] || {});
(function(exports) {
    "use strict";

  // module Data.Unit

  exports.unit = {};
})(PS["Data.Unit"] = PS["Data.Unit"] || {});
(function(exports) {
  // Generated by psc version 0.9.2
  "use strict";
  var $foreign = PS["Data.Unit"];
  var Data_Show = PS["Data.Show"];
  exports["unit"] = $foreign.unit;
})(PS["Data.Unit"] = PS["Data.Unit"] || {});
(function(exports) {
  // Generated by psc version 0.9.2
  "use strict";
  var $foreign = PS["Data.Functor"];
  var Data_Function = PS["Data.Function"];
  var Data_Unit = PS["Data.Unit"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];        
  var Functor = function (map) {
      this.map = map;
  };
  var map = function (dict) {
      return dict.map;
  };
  exports["Functor"] = Functor;
  exports["map"] = map;
})(PS["Data.Functor"] = PS["Data.Functor"] || {});
(function(exports) {
  // Generated by psc version 0.9.2
  "use strict";
  var $foreign = PS["Control.Apply"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Function = PS["Data.Function"];
  var Control_Category = PS["Control.Category"];        
  var Apply = function (__superclass_Data$dotFunctor$dotFunctor_0, apply) {
      this["__superclass_Data.Functor.Functor_0"] = __superclass_Data$dotFunctor$dotFunctor_0;
      this.apply = apply;
  };                      
  var apply = function (dict) {
      return dict.apply;
  };
  exports["Apply"] = Apply;
  exports["apply"] = apply;
})(PS["Control.Apply"] = PS["Control.Apply"] || {});
(function(exports) {
  // Generated by psc version 0.9.2
  "use strict";
  var Control_Apply = PS["Control.Apply"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Unit = PS["Data.Unit"];        
  var Applicative = function (__superclass_Control$dotApply$dotApply_0, pure) {
      this["__superclass_Control.Apply.Apply_0"] = __superclass_Control$dotApply$dotApply_0;
      this.pure = pure;
  };
  var pure = function (dict) {
      return dict.pure;
  };
  var liftA1 = function (dictApplicative) {
      return function (f) {
          return function (a) {
              return Control_Apply.apply(dictApplicative["__superclass_Control.Apply.Apply_0"]())(pure(dictApplicative)(f))(a);
          };
      };
  };
  exports["Applicative"] = Applicative;
  exports["liftA1"] = liftA1;
  exports["pure"] = pure;
})(PS["Control.Applicative"] = PS["Control.Applicative"] || {});
(function(exports) {
  // Generated by psc version 0.9.2
  "use strict";
  var $foreign = PS["Control.Bind"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Category = PS["Control.Category"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];        
  var Bind = function (__superclass_Control$dotApply$dotApply_0, bind) {
      this["__superclass_Control.Apply.Apply_0"] = __superclass_Control$dotApply$dotApply_0;
      this.bind = bind;
  };                     
  var bind = function (dict) {
      return dict.bind;
  };
  exports["Bind"] = Bind;
  exports["bind"] = bind;
})(PS["Control.Bind"] = PS["Control.Bind"] || {});
(function(exports) {
  // Generated by psc version 0.9.2
  "use strict";
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Data_Functor = PS["Data.Functor"];        
  var Monad = function (__superclass_Control$dotApplicative$dotApplicative_0, __superclass_Control$dotBind$dotBind_1) {
      this["__superclass_Control.Applicative.Applicative_0"] = __superclass_Control$dotApplicative$dotApplicative_0;
      this["__superclass_Control.Bind.Bind_1"] = __superclass_Control$dotBind$dotBind_1;
  };
  var ap = function (dictMonad) {
      return function (f) {
          return function (a) {
              return Control_Bind.bind(dictMonad["__superclass_Control.Bind.Bind_1"]())(f)(function (v) {
                  return Control_Bind.bind(dictMonad["__superclass_Control.Bind.Bind_1"]())(a)(function (v1) {
                      return Control_Applicative.pure(dictMonad["__superclass_Control.Applicative.Applicative_0"]())(v(v1));
                  });
              });
          };
      };
  };
  exports["Monad"] = Monad;
  exports["ap"] = ap;
})(PS["Control.Monad"] = PS["Control.Monad"] || {});
(function(exports) {
    "use strict";

  // module Control.Monad.Eff

  exports.pureE = function (a) {
    return function () {
      return a;
    };
  };

  exports.bindE = function (a) {
    return function (f) {
      return function () {
        return f(a())();
      };
    };
  };
})(PS["Control.Monad.Eff"] = PS["Control.Monad.Eff"] || {});
(function(exports) {
  // Generated by psc version 0.9.2
  "use strict";
  var $foreign = PS["Control.Monad.Eff"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Monad = PS["Control.Monad"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Unit = PS["Data.Unit"];        
  var monadEff = new Control_Monad.Monad(function () {
      return applicativeEff;
  }, function () {
      return bindEff;
  });
  var bindEff = new Control_Bind.Bind(function () {
      return applyEff;
  }, $foreign.bindE);
  var applyEff = new Control_Apply.Apply(function () {
      return functorEff;
  }, Control_Monad.ap(monadEff));
  var applicativeEff = new Control_Applicative.Applicative(function () {
      return applyEff;
  }, $foreign.pureE);
  var functorEff = new Data_Functor.Functor(Control_Applicative.liftA1(applicativeEff));
  exports["functorEff"] = functorEff;
  exports["applyEff"] = applyEff;
  exports["applicativeEff"] = applicativeEff;
  exports["bindEff"] = bindEff;
  exports["monadEff"] = monadEff;
})(PS["Control.Monad.Eff"] = PS["Control.Monad.Eff"] || {});
(function(exports) {
  // Generated by psc version 0.9.2
  "use strict";
  var $foreign = PS["D3.Base"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Data_Array = PS["Data.Array"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Foreign_Null = PS["Data.Foreign.Null"];
  var Data_Function = PS["Data.Function"];
  var Data_Maybe = PS["Data.Maybe"];
  var Prelude = PS["Prelude"];
  var Unsafe_Coerce = PS["Unsafe.Coerce"];
  var Data_Show = PS["Data.Show"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Control_Bind = PS["Control.Bind"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data = (function () {
      function Data(value0) {
          this.value0 = value0;
      };
      Data.create = function (value0) {
          return new Data(value0);
      };
      return Data;
  })();
  var Keyed = (function () {
      function Keyed(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      Keyed.create = function (value0) {
          return function (value1) {
              return new Keyed(value0, value1);
          };
      };
      return Keyed;
  })();
  var Value = (function () {
      function Value(value0) {
          this.value0 = value0;
      };
      Value.create = function (value0) {
          return new Value(value0);
      };
      return Value;
  })();
  var SetByIndex = (function () {
      function SetByIndex(value0) {
          this.value0 = value0;
      };
      SetByIndex.create = function (value0) {
          return new SetByIndex(value0);
      };
      return SetByIndex;
  })();
  var SetAttr = (function () {
      function SetAttr(value0) {
          this.value0 = value0;
      };
      SetAttr.create = function (value0) {
          return new SetAttr(value0);
      };
      return SetAttr;
  })();
  var AttrFn = (function () {
      function AttrFn(value0) {
          this.value0 = value0;
      };
      AttrFn.create = function (value0) {
          return new AttrFn(value0);
      };
      return AttrFn;
  })();
  exports["SetAttr"] = SetAttr;
  exports["AttrFn"] = AttrFn;
  exports["Data"] = Data;
  exports["Keyed"] = Keyed;
  exports["Value"] = Value;
  exports["SetByIndex"] = SetByIndex;
})(PS["D3.Base"] = PS["D3.Base"] || {});
(function(exports) {
  /* global exports */
  "use strict";

  exports.d3SelectFn    = function (selector)              { return d3.select(selector); }   

  exports.appendFn    = function (tag, selection)          { return selection.append(tag); }
  exports.attrFn      = function (attr, b, selection)      { return selection.attr(attr, b); }
  exports.bindDataFn  = function (array, selection)        { return selection.data(array); }
  exports.bindDataFnK = function (array, keyFn, selection) { return selection.data(array, keyFn); }
  exports.enterFn     = function (selection)               { return selection.enter(); } 
  exports.selectAllFn = function (selector, selection)     { return selection.selectAll(selector); }
  exports.styleFn     = function (key, val, selection)     { return selection.style(key, val); }
  exports.styleFnFn   = function (key, fn, selection)      { return selection.style(key, fn); }
  exports.attrFnP     = function (names, fn, selection)    { return selection.attr(names, fn); }

  // utility function to package up the parameter block for a callback
  function getCallBackParams(d, elem, prop) {
    var cbParams = { datum:     d
                   , elem:      elem
                   , prop:      prop    // NB - untyped assignment - only use in mkCallback fns
                   , timestamp: d3.event.timeStamp
                   , meta:      d3.event.metaKey
                   , shift:     d3.event.shiftKey
                   , ctrl:      d3.event.ctrlKey
                   , alt:       d3.event.altKey };
    return cbParams;
  }
})(PS["D3.Selection"] = PS["D3.Selection"] || {});
(function(exports) {

  exports.mkEffFn2 = function mkEffFn2(fn) {
    return function(a, b) {
      return fn(a)(b)();
    };
  };

  exports.mkEffFn4 = function mkEffFn4(fn) {
    return function(a, b, c, d) {
      return fn(a)(b)(c)(d)();
    };
  };

  exports.runEffFn1 = function runEffFn1(fn) {
    return function(a) {
      return function() {
        return fn(a);
      };
    };
  };

  exports.runEffFn2 = function runEffFn2(fn) {
    return function(a) {
      return function(b) {
        return function() {
          return fn(a, b);
        };
      };
    };
  };

  exports.runEffFn3 = function runEffFn3(fn) {
    return function(a) {
      return function(b) {
        return function(c) {
          return function() {
            return fn(a, b, c);
          };
        };
      };
    };
  };
})(PS["Data.Function.Eff"] = PS["Data.Function.Eff"] || {});
(function(exports) {
  // Generated by psc version 0.9.2
  "use strict";
  var $foreign = PS["Data.Function.Eff"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  exports["mkEffFn2"] = $foreign.mkEffFn2;
  exports["mkEffFn4"] = $foreign.mkEffFn4;
  exports["runEffFn1"] = $foreign.runEffFn1;
  exports["runEffFn2"] = $foreign.runEffFn2;
  exports["runEffFn3"] = $foreign.runEffFn3;
})(PS["Data.Function.Eff"] = PS["Data.Function.Eff"] || {});
(function(exports) {
  // Generated by psc version 0.9.2
  "use strict";
  var $foreign = PS["D3.Selection"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var D3_Base = PS["D3.Base"];
  var DOM_Event_Types = PS["DOM.Event.Types"];
  var Data_Function_Eff = PS["Data.Function.Eff"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Nullable = PS["Data.Nullable"];
  var Prelude = PS["Prelude"];
  var Data_Functor = PS["Data.Functor"];
  var style = function (name) {
      return function (v) {
          if (v instanceof D3_Base.Value) {
              return Data_Function_Eff.runEffFn3($foreign.styleFn)(name)(v.value0);
          };
          if (v instanceof D3_Base.SetByIndex) {
              return Data_Function_Eff.runEffFn3($foreign.styleFnFn)(name)(Data_Function_Eff.mkEffFn2(v.value0));
          };
          throw new Error("Failed pattern match at D3.Selection line 114, column 1 - line 114, column 60: " + [ name.constructor.name, v.constructor.name ]);
      };
  };
  var selectAll = function (selector) {
      return Data_Function_Eff.runEffFn2($foreign.selectAllFn)(selector);
  };                                                      
  var enter = Data_Function_Eff.runEffFn1($foreign.enterFn);
  var dataBind = function (v) {
      if (v instanceof D3_Base.Data) {
          return Data_Function_Eff.runEffFn2($foreign.bindDataFn)(v.value0);
      };
      if (v instanceof D3_Base.Keyed) {
          return Data_Function_Eff.runEffFn3($foreign.bindDataFnK)(v.value0)(v.value1);
      };
      throw new Error("Failed pattern match at D3.Selection line 139, column 1 - line 139, column 67: " + [ v.constructor.name ]);
  };
  var d3Select = function (selector) {
      return Data_Function_Eff.runEffFn1($foreign.d3SelectFn)(selector);
  };
  var attr = function (s) {
      return function (v) {
          if (v instanceof D3_Base.SetAttr) {
              return Data_Function_Eff.runEffFn3($foreign.attrFn)(s)(v.value0);
          };
          if (v instanceof D3_Base.AttrFn) {
              return Data_Function_Eff.runEffFn3($foreign.attrFnP)(s)(Data_Function_Eff.mkEffFn4(v.value0));
          };
          throw new Error("Failed pattern match at D3.Selection line 110, column 1 - line 110, column 53: " + [ s.constructor.name, v.constructor.name ]);
      };
  };
  var append = function (tag) {
      return Data_Function_Eff.runEffFn2($foreign.appendFn)(tag);
  };
  exports["append"] = append;
  exports["attr"] = attr;
  exports["d3Select"] = d3Select;
  exports["dataBind"] = dataBind;
  exports["enter"] = enter;
  exports["selectAll"] = selectAll;
  exports["style"] = style;
})(PS["D3.Selection"] = PS["D3.Selection"] || {});
(function(exports) {
    "use strict";
  var D3_Selection = PS["D3.Selection"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Monad_Eff_Console = PS["Control.Monad.Eff.Console"];
  var D3_Base = PS["D3.Base"];
  var Prelude = PS["Prelude"];
  var Control_Bind = PS["Control.Bind"];
  var Data_Function = PS["Data.Function"];
  var Control_Applicative = PS["Control.Applicative"];
  var Data_Unit = PS["Data.Unit"];        
  var circleData = [ {
      x: 100.0, 
      y: 100.0
  }, {
      x: 200.0, 
      y: 200.0
  }, {
      x: 100.0, 
      y: 200.0
  }, {
      x: 200.0, 
      y: 100.0
  }, {
      x: 150.0, 
      y: 150.0
  } ];
  var main = function __do() {
      var v = D3_Selection.d3Select(".svg")();
      var v1 = Data_Function.applyFlipped(v)(D3_Selection.append("g"))();
      var v2 = Control_Bind.bind(Control_Monad_Eff.bindEff)(Control_Bind.bind(Control_Monad_Eff.bindEff)(Control_Bind.bind(Control_Monad_Eff.bindEff)(Control_Bind.bind(Control_Monad_Eff.bindEff)(Control_Bind.bind(Control_Monad_Eff.bindEff)(Control_Bind.bind(Control_Monad_Eff.bindEff)(Control_Bind.bind(Control_Monad_Eff.bindEff)(Control_Bind.bind(Control_Monad_Eff.bindEff)(Data_Function.applyFlipped(v1)(D3_Selection.selectAll("circle")))(D3_Selection.dataBind(new D3_Base.Data(circleData))))(D3_Selection.enter))(D3_Selection.append("circle")))(D3_Selection.attr("cx")(new D3_Base.AttrFn(function (d) {
          return function (i) {
              return function (nodes) {
                  return function (el) {
                      return Control_Applicative.pure(Control_Monad_Eff.applicativeEff)(d.x);
                  };
              };
          };
      }))))(D3_Selection.attr("cy")(new D3_Base.AttrFn(function (d) {
          return function (i) {
              return function (nodes) {
                  return function (el) {
                      return Control_Applicative.pure(Control_Monad_Eff.applicativeEff)(d.y);
                  };
              };
          };
      }))))(D3_Selection.attr("r")(new D3_Base.SetAttr(20.0))))(D3_Selection.style("stroke")(new D3_Base.Value("black"))))(D3_Selection.style("fill")(new D3_Base.Value("red")))();
      return Data_Unit.unit;
  };
  exports["circleData"] = circleData;
  exports["main"] = main;
})(PS["Main"] = PS["Main"] || {});
PS["Main"].main();

},{}]},{},[1]);

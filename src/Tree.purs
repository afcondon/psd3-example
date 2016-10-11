module D3.Tree where

import Prelude
import D3.Base (D3, Eff)
import Data.Function.Eff (EffFn1, runEffFn1, runEffFn2, EffFn2)
import Data.Maybe (Maybe)
import Data.Nullable (toMaybe, Nullable)


foreign import data D3Tree           :: *
foreign import data D3Hierarchy      :: *

type HierarchyLink d = { source :: (HierarchyNode d), target :: (HierarchyNode d) }
type HierarchyNode d = {
    data     :: d                    -- the associated data, as specified to the constructor
  , depth    :: Number               -- zero for the root node, and increasing by one for each descendant generation
  , height   :: Number               -- zero for leaf nodes, and the greatest distance from any descendant leaf for internal nodes
  -- , parent   :: (HierarchyNode d)        -- the parent node, or null for the root node
  -- , children :: Array (HierarchyNode d)  -- an array of child nodes, if any; undefined for leaf nodes.
  , value    :: Number               -- the summed value of the node and its descendants; optional, set by node.sum.
  , x        :: Number
  , y        :: Number
}

foreign import d3HierarchyFn :: ∀ eff.   Eff (d3::D3|eff)                                   D3Hierarchy
foreign import d3TreeFn      :: ∀ eff.   Eff (d3::D3|eff)                                 D3Tree
foreign import sizeFn        :: ∀ eff.   EffFn2 (d3::D3|eff) (Array Number) D3Tree        D3Tree
foreign import nodeSizeFn    :: ∀ eff.   EffFn2 (d3::D3|eff) (Array Number) D3Tree        D3Tree
foreign import hierarchizeFn :: ∀ d eff. EffFn2 (d3::D3|eff) (Array d) D3Hierarchy        (HierarchyNode d)
foreign import treeFn        :: ∀ d eff. EffFn2 (d3::D3|eff) (HierarchyNode d) D3Tree     D3Tree

foreign import hasChildrenFn :: ∀ d eff. EffFn1 (d3::D3|eff) (HierarchyNode d)                            Boolean
foreign import ancestorsFn   :: ∀ d eff. EffFn1 (d3::D3|eff) (HierarchyNode d)            (Array (HierarchyNode d))
foreign import descendentsFn :: ∀ d eff. EffFn1 (d3::D3|eff) (HierarchyNode d)            (Array (HierarchyNode d))
-- foreign import eachFn        :: ∀ d eff. EffFn1 (d3::D3|eff) (HierarchyNode d)
-- foreign import eachAfterFn   :: ∀ d eff. EffFn1 (d3::D3|eff) (HierarchyNode d)
-- foreign import eachBeforeFn  :: ∀ d eff. EffFn1 (d3::D3|eff) (HierarchyNode d)
foreign import leavesFn      :: ∀ d eff. EffFn1 (d3::D3|eff) (HierarchyNode d)            (Array (HierarchyNode d))
foreign import linksFn       :: ∀ d eff. EffFn1 (d3::D3|eff) (HierarchyNode d)            (Array (HierarchyLink d))
-- foreign import pathFn        :: ∀ d eff. EffFn1 (d3::D3|eff) (HierarchyNode d)
-- foreign import sortFn        :: ∀ d eff. EffFn1 (d3::D3|eff) (HierarchyNode d)
foreign import sumFn         :: ∀ d eff. EffFn1 (d3::D3|eff) (HierarchyNode d)                              Number
foreign import childrenFn    :: ∀ d eff. EffFn1 (d3::D3|eff) (HierarchyNode d)            (Array (HierarchyNode d))
foreign import parentFn      :: ∀ d eff. EffFn1 (d3::D3|eff) (HierarchyNode d)         (Nullable (HierarchyNode d))


d3Hierarchy :: ∀ eff. Eff (d3::D3|eff) D3Hierarchy
d3Hierarchy = d3HierarchyFn

d3Tree :: ∀ eff. Eff (d3::D3|eff) D3Tree
d3Tree = d3TreeFn

hierarchize :: ∀ d eff. Array d -> D3Hierarchy -> Eff (d3::D3|eff) (HierarchyNode d)
hierarchize = runEffFn2 hierarchizeFn

size :: ∀ eff. Number -> Number -> D3Tree -> Eff (d3::D3|eff) D3Tree
size width height = runEffFn2 sizeFn [width, height]

nodeSize :: ∀ eff. Number -> Number -> D3Tree -> Eff (d3::D3|eff) D3Tree
nodeSize width height = runEffFn2 nodeSizeFn [width, height]

-- || functions on the Tree Layout

-- d3.tree()()    tree as function, lays out HierarchyNodes as a Tree
layoutTree :: ∀ d eff. HierarchyNode d -> D3Tree -> Eff (d3::D3|eff) D3Tree
layoutTree = runEffFn2 treeFn

-- || functions on HierarchyNodes
ancestors   :: ∀ d eff. HierarchyNode d   -> Eff (d3::D3|eff) (Array (HierarchyNode d))
ancestors   = runEffFn1 ancestorsFn

descendents :: ∀ d eff. HierarchyNode d -> Eff (d3::D3|eff) (Array (HierarchyNode d))
descendents  = runEffFn1 descendentsFn

leaves      :: ∀ d eff. HierarchyNode d  -> Eff (d3::D3|eff) (Array (HierarchyNode d))
leaves      = runEffFn1 leavesFn

links       :: ∀ d eff. HierarchyNode d -> Eff (d3::D3|eff) (Array (HierarchyLink d))
links       = runEffFn1 linksFn

sum         :: ∀ d eff. HierarchyNode d -> Eff (d3::D3|eff) Number
sum         = runEffFn1 sumFn

-- || function in lieu of testing null on the array of children
hasChildren :: ∀ d eff. HierarchyNode d -> Eff (d3::D3|eff) Boolean
hasChildren = runEffFn1 hasChildrenFn

-- functions to provide access to the parents and children without circular ref in the definition
children :: ∀ d eff. HierarchyNode d -> Eff (d3::D3|eff) (Array (HierarchyNode d))
children = runEffFn1 childrenFn

parent  :: ∀ d eff. HierarchyNode d -> Eff (d3::D3|eff) (Maybe (HierarchyNode d))
parent node = toMaybe <$> runEffFn1 parentFn node

-- each :: ∀ d eff. HierarchyNode d  ->
-- eachAfter :: ∀ d eff. HierarchyNode d ->
-- eachBefore :: ∀ d eff. HierarchyNode d  ->
-- path :: ∀ d eff. HierarchyNode d  ->
-- sort :: ∀ d eff. HierarchyNode d  ->

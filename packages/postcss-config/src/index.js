

import autoprefixer from "autoprefixer";
import postcssCalc from "postcss-calc";
import postcssClean from "postcss-clean";
import postcssColormin from "postcss-colormin";
import postcssDiscardComments from "postcss-discard-comments";
import postcssDiscardDuplicates from "postcss-discard-duplicates";
import postcssDiscardEmpty from "postcss-discard-empty";
import postcssFontSmoothing from "postcss-font-smoothing";
import postcssFontVariant from "postcss-font-variant";
import postcssImageSetPolyfill from "postcss-image-set-polyfill";
import postcssMergeLonghand from "postcss-merge-longhand";
import postcssMergeRules from "postcss-merge-rules";
import postcssMinifyFontValues from "postcss-minify-font-values";
import postcssMinifyGradients from "postcss-minify-gradients";
import postcssMinifyParams from "postcss-minify-params";
import postcssMinifySelectors from "postcss-minify-selectors";
import postcssNormalizePositions from "postcss-normalize-positions";
import postcssNormalizeUrl from "postcss-normalize-url";
import postcssNormalizeWhitespace from "postcss-normalize-whitespace";
import postcssOrderedValues from "postcss-ordered-values";
import postcssPresetEnv from "postcss-preset-env";
import postcssReduceInitial from "postcss-reduce-initial";
import postcssReduceTransforms from "postcss-reduce-transforms";


export default {
    plugins: [
        autoprefixer({
            flexbox: "no-2009"
        }),
        postcssCalc,
        postcssClean,
        postcssColormin,
        postcssDiscardComments,
        postcssDiscardDuplicates,
        postcssDiscardEmpty,
        postcssFontSmoothing,
        postcssFontVariant,
        postcssImageSetPolyfill,
        postcssMergeLonghand,
        postcssMergeRules,
        postcssMinifyFontValues,
        postcssMinifyGradients,
        postcssMinifyParams,
        postcssMinifySelectors,
        postcssNormalizePositions,
        postcssNormalizeUrl,
        postcssNormalizeWhitespace,
        postcssOrderedValues,
        postcssPresetEnv,
        postcssReduceInitial,
        postcssReduceTransforms
    ]
};

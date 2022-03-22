export const TYPE_PATH_MAP = {
  'up': 'M205.227 698.027a34.133 34.133 0 0 1-48.214-48.214L488.96 317.867a34.133 34.133 0 0 1 48.213 0L869.12 649.813a34.133 34.133 0 0 1-48.213 48.214L512 390.4z',
  'down': 'M820.48 317.867a34.133 34.133 0 1 1 48.213 48.213L536.747 698.027a34.133 34.133 0 0 1-48.214 0l-331.52-331.52a34.133 34.133 0 1 1 48.214-48.64L512 625.92z',
  'left': 'M703.147 815.787A34.133 34.133 0 0 1 654.933 864L322.987 532.48a34.133 34.133 0 0 1 0-48.213L654.933 152.32a34.133 34.133 0 0 1 48.214 48.213L395.093 508.14z',
  'right': 'M322.987 200.533A34.133 34.133 0 1 1 371.2 152.32l331.947 331.947a34.133 34.133 0 0 1 0 48.213L371.2 864a34.133 34.133 0 1 1-48.213-48.213L630.613 508.14z',
  'double-up': 'M204.373 872.533a34.133 34.133 0 0 1-48.213-48.213l331.947-331.947a34.133 34.133 0 0 1 48.213 0L868.267 824.32a34.133 34.133 0 0 1-48.214 48.213L512 564.907z m0-341.333a34.133 34.133 0 0 1-48.213-48.213L488.107 151.04a34.133 34.133 0 0 1 48.213 0l331.947 331.947a34.133 34.133 0 0 1-48.214 48.213L512 223.573z',
  'double-down': 'M819.627 151.467a34.133 34.133 0 1 1 48.213 48.213L535.893 531.627a34.133 34.133 0 0 1-48.213 0L156.16 199.68a34.133 34.133 0 1 1 48.213-48.213L512 459.093z m0 341.333a34.133 34.133 0 1 1 48.213 48.213L535.893 872.96a34.133 34.133 0 0 1-48.213 0L156.16 541.013a34.133 34.133 0 0 1 48.213-48.213L512 800.427z',
  'double-left': 'M872.533 819.627a34.133 34.133 0 0 1-48.213 48.213L492.373 535.893a34.133 34.133 0 0 1 0-48.213L824.32 155.733a34.133 34.133 0 0 1 48.213 48.214L564.907 512z m-341.333 0a34.133 34.133 0 0 1-48.213 48.213l-331.52-331.52a34.133 34.133 0 0 1 0-48.213L483.413 156.14a34.133 34.133 0 0 1 48.214 48.213L223.573 512z',
  'double-right': 'M151.467 204.373a34.133 34.133 0 1 1 48.213-48.213l331.947 331.947a34.133 34.133 0 0 1 0 48.213L199.68 867.84a34.133 34.133 0 1 1-48.213-48.213L459.093 512z m341.333 0a34.133 34.133 0 0 1 48.213-48.213L872.96 488.107a34.133 34.133 0 0 1 0 48.213L541.013 868.267a34.133 34.133 0 0 1-48.213-48.214L800.427 512z',
  'close': 'M463.787 512l-253.44-253.44a34.133 34.133 0 0 1 48.213-48.213L512 463.787l253.44-253.44a34.133 34.133 0 1 1 48.213 48.213L560.213 512l253.44 253.44a34.133 34.133 0 1 1-48.213 48.213L512 560.213l-253.44 253.44a34.133 34.133 0 0 1-48.213-48.213z',
  'check': 'M870.827 213.333A34.133 34.133 0 1 1 921.173 256l-512 554.667a34.133 34.133 0 0 1-49.066 0l-256-256a34.133 34.133 0 0 1 48.213-48.214L384 740.267z',
  'search': 'M941.568 891.904l-156.672-156.672c58.88-70.144 94.72-160.768 94.72-259.072 0-222.72-181.248-403.456-403.456-403.456-222.72 0-403.456 181.248-403.456 403.456 0 222.72 181.248 403.456 403.456 403.456 98.816 0 188.928-35.84 259.072-94.72l156.672 156.672c6.656 6.656 15.872 10.24 25.088 10.24 9.216 0 17.92-3.584 25.088-10.24 13.312-13.824 13.312-36.352-0.512-49.664zM142.848 476.16c0-183.808 149.504-333.312 333.312-333.312s332.8 149.504 332.8 333.312c0 183.808-149.504 333.312-333.312 333.312s-332.8-150.016-332.8-333.312z',
  'edit': 'M815.530015 959.469288 195.138352 959.469288c-32.114418 0-65.541739-14.130835-90.841961-39.431058-25.299199-25.300222-40.307008-57.850569-40.307008-89.964988L63.989383 185.219445c0-33.147958 15.633049-63.797002 43.11496-85.248569 24.100908-18.813484 55.6873-29.753651 88.035032-29.753651l336.698438 0c16.888645 0 30.579459 13.81054 30.579459 30.699186s-13.690814 30.699186-30.579459 30.699186L195.138352 131.615597c-33.180703 0-69.750597 21.060665-69.750597 53.603849l0 644.85482c0 33.530674 36.220946 67.997674 69.750597 67.997674l620.391662 0c32.54216 0 51.754734-34.81697 51.754734-67.997674L867.284749 497.453702c0-16.888645 13.81054-30.579459 30.699186-30.579459s30.699186 13.690814 30.699186 30.579459l0 332.620563c0 32.347732-10.015098 63.056128-28.827559 87.158059C878.403994 944.714236 848.678996 959.469288 815.530015 959.469288zM488.650199 550.213323c-9.912767 0-19.826558-3.78214-27.389814-11.346419-15.126512-15.126512-15.126512-39.650045 0-54.776557L870.335225 75.016531c15.126512-15.126512 39.652092-15.126512 54.778604 0s15.126512 39.650045 0 54.776557L516.03899 538.866904C508.475733 546.431184 498.561943 550.213323 488.650199 550.213323z',
  'calendar': 'M940.218182 107.054545h-209.454546V46.545455h-65.163636v60.50909H363.054545V46.545455H297.890909v60.50909H83.781818c-18.618182 0-32.581818 13.963636-32.581818 32.581819v805.236363c0 18.618182 13.963636 32.581818 32.581818 32.581818h861.090909c18.618182 0 32.581818-13.963636 32.581818-32.581818V139.636364c-4.654545-18.618182-18.618182-32.581818-37.236363-32.581819zM297.890909 172.218182V232.727273h65.163636V172.218182h307.2V232.727273h65.163637V172.218182h176.872727v204.8H116.363636V172.218182h181.527273zM116.363636 912.290909V442.181818h795.927273v470.109091H116.363636z',
  'email': 'm943.69888,74.88275l-863.39777,0c-44.1522,0 -79.94423,41.74994 -79.94423,93.25168l0,687.73113c0,51.5029 35.79203,93.25168 79.94423,93.25168l863.39777,0c44.1522,0 79.94423,-41.74878 79.94423,-93.25168l0,-687.73113c0,-51.50174 -35.79203,-93.25168 -79.94423,-93.25168zm-863.39777,58.2823l863.39777,0c16.53047,0 29.97909,15.68726 29.97909,34.96938l0,70.64397l-461.67798,293.99806l-461.67798,-293.99923l0,-70.64281c0,-19.28212 13.44861,-34.96938 29.97909,-34.96938l0.00001,0.00001zm863.39777,757.66989l-863.39777,0c-16.53047,0 -29.97909,-15.68726 -29.97909,-34.96938l0,-550.68613l449.64437,286.33627a24.87865,29.01992 0 0 0 12.0406,3.56571c4.07116,0.01515 8.20228,-1.13068 12.02761,-3.56688l449.64337,-286.33511l0,550.68613c0,19.28212 -13.44861,34.96938 -29.97909,34.96938l-0.00001,0.00001z',
  'link': 'M506.642286 688.566857l56.996571-57.856c-56.557714-4.278857-93.421714-21.430857-121.289143-49.28-74.989714-75.008-74.569143-181.284571-0.420571-255.433143l139.702857-139.702857c75.008-74.587429 180.443429-75.008 255.012571 0 75.428571 74.989714 74.569143 180.845714 0.438858 254.994286l-84.004572 84.004571c11.995429 27.428571 14.573714 59.136 10.276572 86.985143l125.568-125.568c102.875429-102.857143 103.716571-248.137143-0.420572-352.274286-104.137143-104.155429-249.417143-103.296-352.292571-0.438857l-146.139429 146.578286c-102.857143 102.857143-103.716571 248.576 0.438857 352.274286 26.989714 27.008 61.275429 46.299429 116.132572 55.716571z m10.715428-353.133714l-56.996571 57.856c56.576 4.717714 93.44 21.430857 121.289143 49.28 74.989714 75.008 74.569143 181.284571 0.420571 255.433143l-140.141714 139.702857c-74.569143 74.587429-180.425143 75.008-254.994286 0.438857-75.008-75.428571-74.569143-180.845714 0-255.433143l83.986286-84.004571c-11.995429-26.989714-14.994286-59.136-10.697143-86.985143l-125.586286 125.568c-102.418286 102.857143-103.277714 248.576 0.438857 352.274286 104.137143 104.155429 249.856 103.296 352.274286 0.859428l146.578286-146.998857c102.857143-102.857143 103.716571-248.557714-0.420572-352.274286-27.008-27.008-61.293714-46.299429-116.150857-55.716571z',
  'more': 'M147.012 430.89c-44.791 0-81.109 36.305-81.109 81.11 0 44.779 36.317 81.108 81.109 81.108 44.792 0 81.109-36.33 81.109-81.108 0-44.805-36.316-81.11-81.11-81.11z m364.987 0c-44.79 0-81.108 36.305-81.108 81.11 0 44.779 36.316 81.108 81.108 81.108 44.793 0 81.11-36.33 81.11-81.108 0-44.805-36.317-81.11-81.11-81.11z m364.988 0c-44.79 0-81.108 36.305-81.108 81.11 0 44.779 36.316 81.108 81.108 81.108s81.109-36.33 81.109-81.108c-0.002-44.805-36.318-81.11-81.109-81.11z',
  'loading': 'M987.989333 548.010667c-19.911111 0-35.982222-16.099556-35.982222-36.010667a436.622222 436.622222 0 0 0-34.616889-171.292444 440.433778 440.433778 0 0 0-94.293333-139.918223 437.703111 437.703111 0 0 0-139.889778-94.293333A437.475556 437.475556 0 0 0 512 71.992889 35.982222 35.982222 0 1 1 512 0c69.12 0 136.192 13.511111 199.310222 40.305778a508.359111 508.359111 0 0 1 162.702222 109.681778 511.089778 511.089778 0 0 1 109.681778 162.702222A508.728889 508.728889 0 0 1 1023.886222 512a35.84 35.84 0 0 1-35.896889 36.010667z',
  'loading-3/4': 'm506.98086,1022.83554c-60.65894,0 -120.16685,-10.37635 -176.6821,-30.78696c-54.67361,-19.72646 -105.20354,-48.34694 -150.32366,-85.06324c-90.70065,-73.66066 -153.66163,-176.51192 -177.71802,-289.51148c-4.7192,-22.23503 9.6686,-43.89993 31.99845,-48.57499c22.44496,-4.67506 44.3144,9.57817 49.0336,31.69917c20.02781,94.75543 72.97489,181.07296 149.05754,242.98896c37.86867,30.78696 80.34144,54.84641 126.15217,71.38014c47.42217,17.10387 97.26148,25.76983 148.25182,25.76983c115.56276,0 224.33447,-44.58408 306.05714,-125.5424c81.72267,-80.95831 126.72768,-188.59866 126.72768,-303.19458s-44.77481,-222.12224 -126.49748,-303.19458c-81.72267,-80.95831 -190.37928,-125.5424 -306.05714,-125.5424c-22.90537,0 -41.43684,-18.35815 -41.43684,-41.04928s18.53148,-41.04928 41.43684,-41.04928c69.63692,0 137.08689,13.56907 200.73849,40.13708c61.46465,25.76983 116.59868,62.60016 163.90574,109.46476c47.30706,46.8646 84.48512,101.48295 110.49825,162.37273c26.93395,63.05626 40.51603,129.87538 40.51603,198.86098s-13.69718,135.80472 -40.51603,198.86098c-26.01313,60.88977 -63.19119,115.50813 -110.49825,162.37273c-47.30706,46.8646 -102.44109,83.69493 -163.90574,109.46476c-63.6516,26.68203 -131.10157,40.13708 -200.73849,40.13708z',
  'close-circle-fill': 'M874.037543 149.961337c-199.947609-199.947609-524.127976-199.948609-724.076586 0-199.947609 199.947609-199.947609 524.128976 0 724.076586s524.128976 199.947609 724.076586 0 199.947609-524.128976 0-724.076586zM734.736815 692.311278c11.666977 11.666977 11.666977 30.75894 0 42.425917-11.666977 11.666977-30.75894 11.666977-42.425917 0L511.99925 554.425547 331.687602 734.738195c-11.666977 11.666977-30.75894 11.666977-42.425917 0s-11.666977-30.75894 0-42.425917L469.573333 511.99963 289.260685 331.687982c-11.666977-11.666977-11.666977-30.75894 0-42.425917s30.75894-11.666977 42.425917 0L511.99925 469.573713l180.311648-180.311648c11.666977-11.667977 30.75894-11.667977 42.426917-0.001 11.666977 11.666977 11.666977 30.75894 0 42.425917L554.425167 511.99963l180.311648 180.311648z',
  'success-circle-fill': 'M512 1024C229.23 1024 0 794.77 0 512S229.23 0 512 0s512 229.23 512 512-229.23 512-512 512z m-72.767-381.481L287.205 490.49c-17.183-17.183-45.043-17.183-62.226 0s-17.183 45.042 0 62.225L439.233 766.97l360.624-360.625c17.183-17.183 17.183-45.042 0-62.225s-45.042-17.183-62.225 0l-298.4 298.399z',
  'info-circle-fill': 'M512 1024C229.23 1024 0 794.77 0 512S229.23 0 512 0s512 229.23 512 512-229.23 512-512 512z m44-256V428.508c0-24.301-19.7-44-44-44s-44 19.699-44 44V768c0 24.3 19.7 44 44 44s44-19.7 44-44z m-44-428c35.346 0 64-28.654 64-64 0-35.346-28.654-64-64-64-35.346 0-64 28.654-64 64 0 35.346 28.654 64 64 64z',
  'sigh-circle-fill': 'M512 0C229.23 0 0 229.23 0 512s229.23 512 512 512 512-229.23 512-512S794.77 0 512 0z m44 256v339.492c0 24.301-19.7 44-44 44s-44-19.699-44-44V256c0-24.3 19.7-44 44-44s44 19.7 44 44z m-44 428c35.346 0 64 28.654 64 64 0 35.346-28.654 64-64 64-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64z',
  'doubt-circle-fill': 'M512 0c282.3168 0 512 229.6832 512 512 0 282.2656-229.6832 512-512 512C229.632 1024 0 794.3168 0 512 0 229.632 229.632 0 512 0z m-59.1872 780.7488a51.072 51.072 0 0 0 51.3024 52.6336c29.9776 0.384 52.2752-21.248 52.48-51.1744 0.1536-29.2864-21.4272-51.0208-51.0464-51.456-29.2608-0.4096-52.3776 21.504-52.736 49.9968z m195.7376-288.9472a150.272 150.272 0 0 0 21.1456-23.3216c24.4224-34.9696 31.3088-74.496 27.5712-116.2752-5.1712-56.1408-31.7184-98.6368-81.92-125.312-34.816-18.5088-72.6272-22.0928-111.3088-21.0176-85.7344 2.2784-151.3984 52.8896-174.336 135.3472a198.4512 198.4512 0 0 0-7.3728 65.6896h66.944c1.664-13.9776 2.3552-27.5968 4.9152-40.96 8.4736-43.5456 29.0816-78.2848 73.6512-93.0048a147.5328 147.5328 0 0 1 96.1024 1.024c22.9888 7.6288 41.856 24.32 52.1984 46.2336 20.5824 42.1376 13.3888 95.232-18.5856 129.4848-17.024 18.176-35.456 35.072-53.1456 52.48-25.5232 25.2416-50.3808 50.9184-63.5904 85.3248-10.2144 26.6752-12.288 54.1184-10.4448 82.432h67.7888c0.512-1.1776 1.024-1.792 1.1008-2.4064 0.1536-3.5328 0.3328-7.04 0.2304-10.496-1.28-43.8784 15.8976-79.7696 47.8208-109.056 20.352-18.7904 41.0624-37.1968 61.2608-56.1664h-0.0256z',
  'github-circle-fill': 'M512 12.64c-282.752 0-512 229.216-512 512 0 226.208 146.72 418.144 350.144 485.824 25.6 4.736 35.008-11.104 35.008-24.64 0-12.192-0.48-52.544-0.704-95.328-142.464 30.976-172.512-60.416-172.512-60.416-23.296-59.168-56.832-74.912-56.832-74.912-46.464-31.776 3.52-31.136 3.52-31.136 51.392 3.616 78.464 52.768 78.464 52.768 45.664 78.272 119.776 55.648 148.992 42.56 4.576-33.088 17.856-55.68 32.512-68.48-113.728-12.928-233.28-56.864-233.28-253.024 0-55.904 20-101.568 52.768-137.44-5.312-12.896-22.848-64.96 4.96-135.488 0 0 43.008-13.76 140.832 52.48a491.296 491.296 0 0 1 128.16-17.248c43.488 0.192 87.328 5.888 128.256 17.248 97.728-66.24 140.64-52.48 140.64-52.48 27.872 70.528 10.336 122.592 5.024 135.488 32.832 35.84 52.704 81.536 52.704 137.44 0 196.64-119.776 239.936-233.792 252.64 18.368 15.904 34.72 47.04 34.72 94.816 0 68.512-0.608 123.648-0.608 140.512 0 13.632 9.216 29.6 35.168 24.576C877.472 942.624 1024 750.784 1024 524.64c0-282.784-229.248-512-512-512z',
};
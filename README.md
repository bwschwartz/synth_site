# synth_site
Welcome to SynthSite, an in-browser semi-module synth emulator!

The larger module represents a "VCO" or voltage controlled oscillator: a tone generator. The righthand outputs are square waves, the lefthand, sine waves. Note that square waves sound significantly louder than sine waves. The knobs control frequency in the range 0-360 Hz.

The second module represents a VCA, or voltage controlled amplifier: volume control. The "Turn! On!" knob must be pushed to begin generating sound.

The setup is semi-modular in the sense that there are initially "hardwired" connections between the the VCO sine outputs and the VCA inputs (corresponding to vertical order). To repatch setup, click an output on the VCO, followed by an input on the VCA. They should turn the same gorgeous pastel to indicate they're patched together.

The picture below shows connections between the first oscillator and 3rd amplifier, and vice versa. A protopye of the patch cord dangles meakly beneath the "Turn! On!" button, patiently awaiting a more complete implementation. On the current site there's a broken rope (which fails to redraw the background each frame) that you can play / draw with in the background.

<img width="644" alt="Screen Shot 2022-09-22 at 3 54 20 PM" src="https://user-images.githubusercontent.com/102887694/191839096-73fd5893-64b4-444a-b267-9bca30904bea.png">

The Web Audio API implements all sonic functionality under the hood. The JQUERY UI implements drag and drop-ability for the modules. Matter.js will also be used to implement physcically realistic patch cords at a future date.


Future work will include: A filter bank module; two speaker objects that control panning through user interaction; a re-design with an emphasis on realism (not to mention sane HTML).


Modularity is implemeneted by two functions, send and receive, in the "Connection" class.

<img width="751" alt="Screen Shot 2022-09-22 at 7 17 06 PM" src="https://user-images.githubusercontent.com/102887694/191868151-db982d6d-f871-493a-af44-be3c5ae1e52a.png">

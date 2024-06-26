// Translation document for the collection
// =======================================
// This file contains the texts
// annotated for translation
//
// Instructions:
// 1. Open the PO file with Poedit
// 2. Press "Update" to update from sources

gettext('DeMux');
gettext('Mux');
gettext('01-bit');
gettext('02-bits');
gettext('03-bits');
gettext('04-bits');
gettext('08-bits');
gettext('DeMux-1-2');
gettext('DeMux-1-4');
gettext('DeMux-1-8');
gettext('DeMux-1-2');
gettext('DeMux-1-2-Bus');
gettext('DeMuxF-1-2');
gettext('Alhambra-II');
gettext('Alhambra-II');
gettext('01-manual-test');
gettext('sysclk_div: Generate a signal from the division of the system clock by 2');
gettext('System TFF: It toogles its output on every system cycle');
gettext('D Flip-flop (verilog implementation)');
gettext('NOT gate (Verilog implementation)');
gettext('1-to-2 DeMultplexer (1-bit channels) (Outputs grouped in a Bus)');
gettext('1-to-2 DeMultplexer (1-bit channels)');
gettext('Two bits input And gate');
gettext('Bus2-Join-all: Joint two wires into a 2-bits Bus');
gettext('Parameter: Initial value');
gettext('System clock');
gettext('Input data');
gettext('Output');
gettext('# D Flip-Flop  \n\nIt stores the input data that arrives at cycle n  \nIts output is shown in the cycle n+1');
gettext('Input');
gettext('01-manual-test');
gettext('Alhambra-II');
gettext('01-manual-test');
gettext('1-to-2 DeMultiplexer (1-bit channels) (Flipped version)');
gettext('DeMux-1-4');
gettext('DeMux-14-Bus');
gettext('DeMuxF-1-4');
gettext('Alhambra-II');
gettext('01-manual-test');
gettext('Button-tic: Configurable button that emits a tic when it is pressed');
gettext('Rising-edge detector. It generates a 1-period pulse (tic) when a rising edge is detected on the input');
gettext('Configurable button (pull-up on/off. Not on/off)');
gettext('FPGA internal pull-up configuration on the input port');
gettext('Remove the rebound on a mechanical switch');
gettext('1bit register (implemented in verilog)');
gettext('16-bits Syscounter with reset');
gettext('DFF-rst-x16: 16 D flip-flops in paralell with reset');
gettext('DFF-rst-x04: Three D flip-flops in paralell with reset');
gettext('Bus4-Split-all: Split the 4-bits bus into its wires');
gettext('Bus4-Join-all: Join all the wires into a 4-bits Bus');
gettext('DFF-rst-x01: D Flip flop with reset input. When rst=1, the DFF is 0');
gettext('Bus16-Split-quarter: Split the 16-bits bus into four buses of the same size');
gettext('Bus16-Join-quarter: Join the four same buses into an 16-bits Bus');
gettext('Inc1-16bit: Increment a 16-bits number by one');
gettext('AdderK-16bit: Adder of 16-bit operand and 16-bit constant');
gettext('Generic: 16-bits generic constant');
gettext('Adder-16bits: Adder of two operands of 16 bits');
gettext('Bus16-Split-half: Split the 16-bits bus into two buses of the same size');
gettext('Adder-8bits: Adder of two operands of 8 bits');
gettext('Bus8-Split-half: Split the 8-bits bus into two buses of the same size');
gettext('Adder-4bits: Adder of two operands of 4 bits');
gettext('Adder-1bit: Adder of two operands of 1 bit');
gettext('AdderC-1bit: Adder of two operands of 1 bit plus the carry in');
gettext('XOR gate: two bits input xor gate');
gettext('OR2: Two bits input OR gate');
gettext('Constant bit 0');
gettext('Bus8-Join-half: Join the two same halves into an 8-bits Bus');
gettext('AdderC-4bits: Adder of two operands of 4 bits and Carry in');
gettext('AdderC-8bits: Adder of two operands of 8 bits and Carry in');
gettext('Bus16-Join-half: Join the two same halves into an 16-bits Bus');
gettext('Edges detector. It generates a 1-period pulse (tic) when either a rising edge or a falling edge is detected on the input');
gettext('Sync 1-bit input with the system clock domain');
gettext('Select positive or negative logic for the input (0=positive, 1=negative)');
gettext('1-bit generic constant (0/1)');
gettext('Counter-x02: 2-bits counter');
gettext('Generic component with clk input');
gettext('Reg: 1-Bit register');
gettext('2-to-1 Multplexer (1-bit channels). Fippled version');
gettext('2-to-1 Multplexer (1-bit channels)');
gettext('Bus2-Split-all: Split the 2-bits bus into two wires');
gettext('Inc1-2bit: Increment a 2-bits number by one');
gettext('AdderK-2bit: Adder of 2-bit operand and 2-bit constant');
gettext('Generic: 2-bits generic constant (0,1,2,3)');
gettext('Adder-2bits: Adder of two operands of 2 bits');
gettext('1-to-4 DeMultplexer (1-bit channels)');
gettext('Button state signal');
gettext('Tic: button pressed');
gettext('Rising edge detector');
gettext('Pull up on/off');
gettext('Not on/off');
gettext('## Rising edge detector\n\nIt generates a 1-period pulse (tic) when a rising edge is detected on the  \ninput signal');
gettext('Input signal');
gettext('Current signal  \nstate');
gettext('Signal state in the previous  \nclock cycle');
gettext('If the current signal is 1 and its value in  \nthe previous clock cycle was 0, it means  \nthat a rising edge has been detected!  \nThe output es 1\n\nIn any other case the output is 0');
gettext('**Delay**: 0 clock cycles \n\nThere is no delay between the arrival of a rising edge  \nand its detection');
gettext('Internal pull-up  \n* 0: OFF\n* 1: ON');
gettext('Synchronization stage');
gettext('Normalization stage\n\n* 0: Wire\n* 1: signal inverted');
gettext('Debouncing stage');
gettext('### Pull-up parameter:\n\n0: No pull-up  \n1: Pull-up activated');
gettext('Only an FPGA pin can  \nbe connected here!!!');
gettext('The pull-up is connected  \nby default');
gettext('Edge detector');
gettext('Whenever there is a change in  \nthe input, the counter is started');
gettext('If the counter reaches it maximum  \nvalue, the input is considered stable  \nand it is captured');
gettext('### Time calculation\n\nFor CLK=12MHZ, a 16-bit counter reaches its  \nmaximum every 2 ** 16 * 1/F = 5.5ms aprox  \nIF more time is needed for debouncing,  \nuse a counter with more bits (17, 18...)');
gettext('## Debouncer  \n\nA value is considered stable when  \nthere is no changes during 5.5ms  \naprox. When a value is stable it is  \ncaptured on the output flip-flop');
gettext('Stable output');
gettext('Counter');
gettext('Initial value');
gettext('Reset input: Active high  \nWhen rst = 1, the DFF is reset to 0');
gettext('Data input');
gettext('Initial default  \nvalue: 0');
gettext('## Edges detector\n\nIt generates a 1-period pulse (tic) when an edge (Rising or falling) is detected on the  \ninput signal');
gettext('The output is 1 if the current value is 1 and the  \nprevious 0, or if the current value is 0 and the  \nprevious 1\n');
gettext('In any other case the output is 0');
gettext('When k=0, it works like a wire  \n(The output is equal to the input)  \nWhen k=1, it act as a not gate\n(The output is the inverse of the input)');
gettext('### Truth table for XOR\n\n| k | input | output | function |\n|---|-------|--------|----------|\n| 0 | 0     |  0     | wire     |\n| 0 | 1     |  1     | wire     |\n| 1 | 0     |  1     | Not      |\n| 1 | 1     |  0     | Not      |');
gettext('Mux 2-1');
gettext('D Flip-flip\n(System)');
gettext('Alhambra-II');
gettext('01-manual-test');
gettext('1-to-4 DeMultplexer (1-bit channels) (Output grouped in a bus)');
gettext('Alhambra-II');
gettext('01-manual-test');
gettext('1-to-4 DeMultplexer (1-bit channels). Flipped version');
gettext('DeMux-1-8');
gettext('DeMux-1-8-Bus');
gettext('DemuxF-1-8');
gettext('Alhambra-II');
gettext('Alhambra-II');
gettext('01-manual-test');
gettext('Counter-x03: 3-bits counter');
gettext('Reg-x03: 3-bits register');
gettext('Bus3-Split-all: Split the 3-bits bus into three wires');
gettext('Bus3-Join-all: Joint three wires into a 3-bits Bus');
gettext('Inc1-3bit: Increment a 3-bits number by one');
gettext('AdderK-3bit: Adder of 3-bit operand and 3-bit constant');
gettext('Generic: 3-bits generic constant (0-7)');
gettext('Adder-3bits: Adder of two operands of 3 bits');
gettext('1-to-8 DeMultplexer (1-bit channels) (Output grouped in a bus)');
gettext('Bus8-Join-all: Join all the wires into a 8-bits Bus');
gettext('1-to-8 DeMultplexer (1-bit channels)');
gettext('01-manual-test');
gettext('Alhambra-II');
gettext('01-manual-test');
gettext('1-to-8 DeMultplexer (1-bit channels). Flipped version');
gettext('Demux-1-2');
gettext('Demux-1-4');
gettext('Demux-1-8');
gettext('Demux-1-2');
gettext('Alhambra-II');
gettext('01-manual-test');
gettext('DeMux-1-2-02-bits: 1-to-2 DeMultplexer (2-bit channels)');
gettext('Demux-1-4');
gettext('Alhambra-II');
gettext('01-manual-test');
gettext('DeMux-1-4-02-bits: 1-to-2 DeMultplexer (2-bit channels)');
gettext('Demux-1-8');
gettext('Alhambra-II');
gettext('01-manual-test');
gettext('Bus8-Join-quarter: Join the four quarters into an 8-bits Bus');
gettext('Display16-8: Display a 16-bits value on an  8-LEDs. The sel input selects the byte to display ');
gettext('2-to-1 Multplexer (8-bit channels)');
gettext('2-to-1 Multplexer (4-bit channels)');
gettext('Counter-x01: 1-bit counter');
gettext('Channel B');
gettext('Channel A');
gettext('Demux-1-2');
gettext('Demux-1-4');
gettext('Demux-1-8');
gettext('Demux-1-2');
gettext('Alhambra-II');
gettext('01-manual-test');
gettext('DeMux-1-2-03-bits: 1-to-2 DeMultplexer (3-bit channels)');
gettext('Demux-1-4');
gettext('Alhambra-II');
gettext('01-manual-test');
gettext('DeMux-1-4-03-bits: 1-to-2 DeMultplexer (3-bit channels)');
gettext('Bus12-Join-one-fourth: Join the four buses into an 12-bits Bus');
gettext('UINT16-12bits:  Extend a 12-bits unsigned integer to 16-bits ');
gettext('Bus16-Join-4-12: Join the two same halves into an 16-bits Bus');
gettext('4bits constant value: 0');
gettext('Generic: 4-bits generic constant (0-15)');
gettext('Demux-1-8');
gettext('Alhambra-II');
gettext('01-manual-test');
gettext('1-to-8 DeMultplexer (3-bit channels)');
gettext('Bus24-Join-half: Join the two buses into an 24-bits Bus');
gettext('Display24-8: Display a 24-bits value on  8-LEDs. The sel input selects the byte to display ');
gettext('4-to-1 Multplexer (8-bit channels)');
gettext('Counter-M-x02: 2-bits M module counter');
gettext('Comp2-2bit: Comparator of two 2-bit numbers');
gettext('Comp2-1bit: Comparator of two 1-bit numbers');
gettext('reg-rst-2-bits:  2-bits register with reset');
gettext('1-bit-Reg-rst: 1-Bit register with reset');
gettext('Bus24-Split-one-third: Split the 24-bits bus into three buses of  the same size');
gettext('8bits constant value: 0');
gettext('Generic: 8-bits generic constant (0-255)');
gettext('2-bits Comparator');
gettext('Maximum count  \nreached');
gettext('2-bits register');
gettext('If the max count is reached  \nand the cnt tic is received,  \nthe register is reset to 0');
gettext('A');
gettext('B');
gettext('Demux-1-2');
gettext('Demux-1-4');
gettext('Demux-1-8');
gettext('Demux-1-2');
gettext('Alhambra-II');
gettext('01-manual-test');
gettext('DeMux-1-2-04-bits: 1-to-2 DeMultplexer (4-bit channels)');
gettext('Demux-1-4');
gettext('01-manual-test');
gettext('DeMux-1-4-04-bits: 1-to-2 DeMultplexer (4-bit channels)');
gettext('Demux-1-8');
gettext('Alhambra-II');
gettext('01-manual-test');
gettext('Display32-8: Display a 32-bits value on an  8-LEDs. The sel input selects the byte to display ');
gettext('Bus32-Split-quarter: Split the 32-bits bus into four buses of 8 wires');
gettext('Bus32-Join-half: Join the two buses into an 32-bits Bus');
gettext('1-to-8 DeMultplexer (4-bit channels)');
gettext('Demux-1-2');
gettext('Demux-1-4');
gettext('Demux-1-8');
gettext('Demux-1-2');
gettext('Alhambra-II');
gettext('01-manual-test');
gettext('DeMux-1-2-08-bits: 1-to-2 DeMultplexer (8-bit channels)');
gettext('Demux-1-4');
gettext('Alhambra-II');
gettext('01-manual-test');
gettext('DeMux-1-4-08-bits: 1-to-4 DeMultplexer (8-bit channels)');
gettext('Bus32-Join-quarter: Join the four buses into an 32-bits Bus');
gettext('Demux-1-8');
gettext('Alhambra-II');
gettext('01-manual-test');
gettext('Display64-8: Display a 64-bits value on  8-LEDs. The sel input selects the byte to display ');
gettext('8-to-1 Multplexer (8-bit channels)');
gettext('8-to-1 Multplexer (2-bit channels)');
gettext('8-to-1 Multplexer (1-bit channels)');
gettext('Bus3-Split-2-1: Split the 3-bits bus into two: 2-bit and 1-bits buses');
gettext('4-to-1 Multplexer (1-bit channels)');
gettext('Bus8-Split-quarter: Split the 8-bits bus into four buses of the same size');
gettext('Bus64-Split-half: Split the 64-bits bus into two buses of 32 wires');
gettext('Bus64-Join-half: Join the two buses into an 64-bits Bus');
gettext('1-to-8 DeMultplexer (8-bit channels)');
gettext('01-bit');
gettext('02-bits');
gettext('03-bits');
gettext('04-bits');
gettext('05-bits');
gettext('06-bits');
gettext('07-bits');
gettext('08-bits');
gettext('09-bits');
gettext('10-bits');
gettext('11-bits');
gettext('12-bits');
gettext('15-bits');
gettext('16-bits');
gettext('19-bits');
gettext('20-bits');
gettext('23-bits');
gettext('24-bits');
gettext('27-bits');
gettext('28-bits');
gettext('31-bits');
gettext('32-bits');
gettext('Mux-2-1');
gettext('Mux-4-1');
gettext('Mux-8-1');
gettext('Mux-2-1');
gettext('Mux-2-1-Bus');
gettext('MuxF-2-1');
gettext('Alhambra-II');
gettext('Alhambra-II');
gettext('01-manual-testing');
gettext('Constant bit 1');
gettext('Mux-2-1-Bus-verilog: 2-to-1 Multplexer (1-bit channels). Inputs grouped into a Bus. Verilog implementation');
gettext('01-manual-testing');
gettext('01-manual-test');
gettext('2-to-1 Multplexer (1-bit channels). Verilog implementation');
gettext('01-manual-test');
gettext('Alhambra-II');
gettext('01-manual-testing');
gettext('MuxF-2-1-verilog: 2-to-1 Multplexer (1-bit channels). Fippled version');
gettext('01-manual-testing');
gettext('Mux-4-1');
gettext('Mux-4-1-Bus');
gettext('MuxF-4-1');
gettext('Alhambra-II');
gettext('Alhambra-II');
gettext('01-manual-testing');
gettext('4-to-1 Multplexer (1-bit channels). Inputs grouped into a Bus');
gettext('4-to-1 Multplexer (1-bit channels). Verilog implementation');
gettext('sysclk_div4: Generate a signal from the division of the system clock by 4');
gettext('2-bits Syscounter');
gettext('DFF-02: Two D flip-flops in paralell');
gettext('01-manual-testing');
gettext('01-manual-testing');
gettext('0%');
gettext('25%');
gettext('50%');
gettext('100%');
gettext('01-manual-testing');
gettext('Alhambra-II');
gettext('01-manual-testing');
gettext('4-to-1 Multplexer (1-bit channels). Flipped version');
gettext('01-manual-testing');
gettext('Mux-8-1');
gettext('Mux-8-1-Bus');
gettext('MuxF-8-1');
gettext('Alhambra-II');
gettext('01-manual-testing');
gettext('8-to-1 Multplexer (1-bit channels). Inputs grouped into a Bus');
gettext('Bus8-Split-all: Split the 8-bits bus into its wires');
gettext('sysclk_div8: Generate a signal from the division of the system clock by 8');
gettext('3-bits Syscounter');
gettext('DFF-03: Three D flip-flops in paralell');
gettext('sysclk_div16: Generate a signal from the division of the system clock by 16');
gettext('4-bits Syscounter');
gettext('DFF-04: Three D flip-flops in paralell');
gettext('Inc1-4bit: Increment a 4-bits number by one');
gettext('AdderK-4bit: Adder of 4-bit operand and 4-bit constant');
gettext('sysclk_div32: Generate a signal from the division of the system clock by 32');
gettext('5-bits Syscounter');
gettext('DFF-05: five D flip-flops in paralell');
gettext('Bus5-Split-1-4: Split the 5-bits bus into two buses of 1 and 4 bits');
gettext('Bus5-Join-1-4: Join the two buses of 1 and 4 bits into a 5-bits Bus');
gettext('Inc1-5bit: Increment a 5-bits number by one');
gettext('AdderK-5bit: Adder of 5-bit operand and 5-bit constant');
gettext('Adder-5bits: Adder of two operands of 5 bits');
gettext('Generic: 5-bits generic constant (0-31)');
gettext('sysclk_div64: Generate a signal from the division of the system clock by 64');
gettext('6-bits Syscounter with reset');
gettext('DFF-rst-x06: Six D flip-flops in paralell with reset');
gettext('Bus6-Split-2-4: Split the 6-bits bus into two buses of 2 and 4 wires');
gettext('Bus6-Join-2-4: Join all the two buses into a 6-bits Bus');
gettext('DFF-rst-x02: Two D flip-flops in paralell with reset');
gettext('Inc1-6bit: Increment a 6-bits number by one');
gettext('AdderK-6bit: Adder of 6-bit operand and 6-bit constant');
gettext('Adder-6bits: Adder of two operands of 6 bits');
gettext('Bus6-Join-1-5: Join the two buses into a 6-bits Bus');
gettext('Generic: 6-bits generic constant (0-63)');
gettext('01-manual-testing');
gettext('01-manual-testing');
gettext('8-to-1 Multplexer (1-bit channels) (Verilog implementation)');
gettext('12%');
gettext('6%');
gettext('3%');
gettext('1.5%');
gettext('01-manual-testing');
gettext('01-manual-testing');
gettext('8-to-1 Multplexer (1-bit channels). Flipped version');
gettext('01-manual-testing');
gettext('Mux2-1');
gettext('Mux4-1');
gettext('Mux8-1');
gettext('Mux2-1');
gettext('Alhambra-II');
gettext('01-manual-test');
gettext('2bits constant value: 1');
gettext('2bits constant value: 2');
gettext('2-to-1 Multplexer (2-bit channels). Verilog implementation');
gettext('## Manual testing\n\nOne constant is shown on the leds. When  \nthe button is pressed, the other constants is  \ndiplayed on the LEDs');
gettext('01-manual-test');
gettext('Mux4-1');
gettext('Alhambra-II');
gettext('01-manual-test');
gettext('2bits constant value: 0');
gettext('2bits constant value: 3');
gettext('4-to-1 Multplexer (2-bit channels). Verilog implementation');
gettext('## Manual testing\n\nThe four numbers are displayed on the LEDs according to the  \nvalue of the input buttons');
gettext('01-manual-test');
gettext('Mux8-1');
gettext('Alhambra-II');
gettext('01-manual-testing');
gettext('8-to-1 Multplexer (2-bit channels) (Verilog implementation)');
gettext('01-manual-testing');
gettext('Mux-2-1');
gettext('Mux-4-1');
gettext('Alhambra-II');
gettext('01-manual-test');
gettext('2-to-1 Multplexer (3-bit channels). Verilog implementation');
gettext('01-manual-test');
gettext('Alhambra-II');
gettext('01-manual-test');
gettext('3bits constant value: 0');
gettext('3bits constant value: 1');
gettext('3bits constant value: 2');
gettext('3bits constant value: 4');
gettext('4-to-1 Multplexer (3-bit channels). Verilog implementation');
gettext('01-manual-test');
gettext('Mux-2-1');
gettext('Mux-4-1');
gettext('Mux-8-1');
gettext('Alhambra-II');
gettext('01-manual-test');
gettext('2-to-1 Multplexer (4-bit channels). Verilog implementation');
gettext('01-manual-test');
gettext('Alhambra-II');
gettext('01-manual-test');
gettext('4bits constant value: 1');
gettext('4bits constant value: 2');
gettext('4bits constant value: 4');
gettext('4bits constant value: 8');
gettext('4-to-1 Multplexer (4-bit channels)');
gettext('Channel D');
gettext('Channel C');
gettext('01-manual-test');
gettext('Alhambra-II');
gettext('01-manual-test');
gettext('8-to-1 Multplexer (4-bit channels) (Verilog implementation)');
gettext('01-manual-test');
gettext('Mux-2-1');
gettext('Alhambra-II');
gettext('01-manual-test');
gettext('2-to-1 Multplexer (5-bit channels). Verilog implementation');
gettext('01-manual-test');
gettext('Mux-2-1');
gettext('Alhambra-II');
gettext('01-manual-test');
gettext('2-to-1 Multplexer (6-bit channels). Verilog implementation');
gettext('01-manual-test');
gettext('Mux-2-1');
gettext('Alhambra-II');
gettext('01-manual-test');
gettext('Generic: 7-bits generic constant (0-127)');
gettext('2-to-1 Multplexer (7-bit channels). Verilog implementation');
gettext('01-manual-test');
gettext('Mux-2-1');
gettext('Mux-4-1');
gettext('Mux-8-1');
gettext('Alhambra-II');
gettext('01-manual-test');
gettext('2-to-1 Multplexer (8-bit channels). Verilog implementation');
gettext('## 8-bits Mux-2-1: Manual testing\n\nTwo 8-bit values are displayed on the leds, depending  \non the sw1 button');
gettext('01-manual-test');
gettext('Alhambra-II');
gettext('01-manual-test');
gettext('4-to-1 Multplexer (8-bit channels). Verilog implementation');
gettext('## 8-bits Mux-4-1: Manual testing\n\nTwo 8-bit values are displayed on the leds, depending  \non the sw1 button');
gettext('01-manual-test');
gettext('01-manual-test');
gettext('8-to-1 Multplexer (8-bit channels) (Verilog implementation)');
gettext('01-manual-test');
gettext('Mux-2-1');
gettext('Alhambra-II');
gettext('01-manual-test');
gettext('UINT8-1bit:  Extend a 1-bit unsigned integer to 8-bits ');
gettext('Bus7-Join-7-1: Join the two buses into an 8-bits Bus');
gettext('7bits constant value: 0');
gettext('Generic: 9-bits generic constant');
gettext('Bus9-Split-half: Split the 9-bits bus into two buses of 1 and 8 wires');
gettext('2-to-1 Multplexer (9-bit channels). Verilog implementation');
gettext('## 9-bits Mux-2-1: Manual testing\n');
gettext('01-manual-test');
gettext('Mux-2-1');
gettext('Alhambra-II');
gettext('01-manual-test');
gettext('Bus10-Split-2-8: Split the 10-bits bus into two buses of 2 and 8 wires');
gettext('UINT8-2bits:  Extend a 2-bits unsigned integer to 8-bits ');
gettext('Bus8-Join-6-2: Join the two buses into an 8-bits Bus');
gettext('6bits constant value: 0');
gettext('2-to-1 Multplexer (10-bit channels). Verilog implementation');
gettext('## 10-bits Mux-2-1: Manual testing\n');
gettext('01-manual-test');
gettext('Mux-2-1');
gettext('Alhambra-II');
gettext('01-manual-test');
gettext('Generic: 11-bits generic constant');
gettext('Bus11-Split-3-8: Split the 11-bits bus into two buses of 3 and 8 wires');
gettext('UINT8-3bits:  Extend a 3-bits unsigned integer to 8-bits ');
gettext('Bus8-Join-5-3: Join the two buses into an 8-bits Bus');
gettext('5bits constant value: 0');
gettext('2-to-1 Multplexer (11-bit channels). Verilog implementation');
gettext('## 11-bits Mux-2-1: Manual testing\n');
gettext('01-manual-test');
gettext('Mux-2-1');
gettext('Alhambra-II');
gettext('01-manual-test');
gettext('Generic: 12-bits generic constant (0-4095)');
gettext('Bus12-Split-4-8: Split the 12-bits bus into two buses of 4 and 8 wires');
gettext('UINT8-4bits:  Extend a 4-bits unsigned integer to 8-bits ');
gettext('2-to-1 Multplexer (12-bit channels). Verilog implementation');
gettext('## 12-bits Mux-2-1: Manual testing\n');
gettext('01-manual-test');
gettext('Mux-2-1');
gettext('Alhambra-II');
gettext('01-manual-test');
gettext('Generic: 15-bits generic constant');
gettext('Bus15-Split-7-8: Split the 15-bits bus into two buses of 7 and 8 bits');
gettext('UINT8-7bits:  Extend a 7-bits unsigned integer to 8-bits ');
gettext('Bus7-Join-1-7: Join the two buses into an 8-bits Bus');
gettext('2-to-1 Multplexer (15-bit channels). Verilog implementation');
gettext('## 15-bits Mux-2-1: Manual testing\n');
gettext('01-manual-test');
gettext('Mux-2-1');
gettext('Alhambra-II');
gettext('01-manual-test');
gettext('2-to-1 Multplexer (16-bit channels). Verilog implementation');
gettext('## 16-bits Mux-2-1: Manual testing\n');
gettext('01-manual-test');
gettext('Mux-2-1');
gettext('Alhambra-II');
gettext('01-manual-test');
gettext('Generic: 19-bits generic constant');
gettext('Bus19-Split-3-8-8: Split the 19-bits bus into three buses of 3, 8 and 8 wires');
gettext('2-to-1 Multplexer (19-bit channels). Verilog implementation');
gettext('## 19-bits Mux-2-1: Manual testing\n');
gettext('01-manual-test');
gettext('Mux-2-1');
gettext('Alhambra-II');
gettext('01-manual-test');
gettext('Generic: 20-bits generic constant');
gettext('Bus20-Split-4-8-8: Split the 20-bits bus into three buses of 4, 8 and 8 wires');
gettext('2-to-1 Multplexer (20-bit channels). Verilog implementation');
gettext('## 20-bits Mux-2-1: Manual testing\n');
gettext('01-manual-test');
gettext('Mux-2-1');
gettext('Alhambra-II');
gettext('01-manual-test');
gettext('Generic: 23-bits generic constant');
gettext('Bus19-Split-3-8-8: Split the 19-bits bus into three buses of 3,8 and 8 bits');
gettext('2-to-1 Multplexer (23-bit channels). Verilog implementation');
gettext('## 23-bits Mux-2-1: Manual testing\n');
gettext('01-manual-test');
gettext('Mux-2-1');
gettext('Alhambra-II');
gettext('01-manual-test');
gettext('Generic: 24-bits generic constant');
gettext('2-to-1 Multplexer (24-bit channels). Verilog implementation');
gettext('## 24-bits Mux-2-1: Manual testing\n');
gettext('01-manual-test');
gettext('Mux-2-1');
gettext('Alhambra-II');
gettext('01-manual-test');
gettext('Generic: 27-bits generic constant');
gettext('Bus27-Split-3-8-8-8: Split the 27-bits bus into four buses of 7,8, 8 and 8 bits');
gettext('2-to-1 Multplexer (27-bit channels). Verilog implementation');
gettext('## 27-bits Mux-2-1: Manual testing\n');
gettext('01-manual-test');
gettext('Mux-2-1');
gettext('Alhambra-II');
gettext('01-manual-test');
gettext('Generic: 28-bits generic constant');
gettext('Bus28-Split-4-8-8-8: Split the 28-bits bus into four buses of 4, 8, 8, and 8 wires');
gettext('2-to-1 Multplexer (28-bit channels). Verilog implementation');
gettext('## 28-bits Mux-2-1: Manual testing\n');
gettext('01-manual-test');
gettext('Mux-2-1');
gettext('Alhambra-II');
gettext('01-manual-test');
gettext('Generic: 31-bits generic constant');
gettext('Bus31-Split-7-8-8-8: Split the 31-bits bus into four buses of 7,8, 8 and 8 bits');
gettext('2-to-1 Multplexer (31-bit channels). Verilog implementation');
gettext('## 31-bits Mux-2-1: Manual testing\n');
gettext('01-manual-test');
gettext('Mux-2-1');
gettext('Alhambra-II');
gettext('01-manual-test');
gettext('Generic: 32-bits generic constant');
gettext('2-to-1 Multplexer (32-bit channels). Verilog implementation');
gettext('## 32-bits Mux-2-1: Manual testing\n');
gettext('01-manual-test');

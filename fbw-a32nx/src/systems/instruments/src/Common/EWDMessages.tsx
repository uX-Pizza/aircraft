// Copyright (c) 2022 FlyByWire Simulations
// SPDX-License-Identifier: GPL-3.0

const EWDMessages = {
    '000000001': '              \x1b<3mNORMAL',
    '000001001': '\x1b<3m\x1b4mT.O\x1bm AUTO BRK\x1b<5m.....MAX',
    '000001002': '\x1b<3m\x1b4mT.O\x1bm AUTO BRK MAX',
    '000001003': '    \x1b<3mSEAT BELTS\x1b<5m....ON',
    '000001004': '    \x1b<3mSEAT BELTS ON',
    '000001005': '    \x1b<3mCABIN\x1b<5m......CHECK',
    '000001006': '    \x1b<3mCABIN READY',
    '000001007': '    \x1b<3mSPLRS\x1b<5m........ARM',
    '000001008': '    \x1b<3mSPLRS ARM',
    '000001009': '    \x1b<3mFLAPS\x1b<5m........T.O',
    '000001010': '    \x1b<3mFLAPS T.O',
    '000001011': '    \x1b<3mT.O CONFIG\x1b<5m..TEST',
    '000001012': '    \x1b<3mT.O CONFIG NORMAL',
    '000002001': '\x1b<3m\x1b4mLDG\x1bm LDG GEAR\x1b<5m......DN',
    '000002002': '\x1b<3m\x1b4mLDG\x1bm LDG GEAR DN',
    '000002003': '    \x1b<3mSEAT BELTS\x1b<5m....ON',
    '000002004': '    \x1b<3mSEAT BELTS ON',
    '000002005': '    \x1b<3mCABIN\x1b<5m......CHECK',
    '000002006': '    \x1b<3mCABIN READY',
    '000002007': '    \x1b<3mSPLRS\x1b<5m........ARM',
    '000002008': '    \x1b<3mSPLRS ARM',
    '000002009': '    \x1b<3mFLAPS\x1b<5m.......FULL',
    '000002010': '    \x1b<3mFLAPS FULL',
    '000002011': '    \x1b<3mFLAPS\x1b<5m.....CONF 3',
    '000002012': '    \x1b<3mFLAPS CONF 3',
    '000002201': '\x1b<3mAUTO BRK LO',
    '000002202': '\x1b<3mAUTO BRK MED',
    '000002203': '\x1b<3mAUTO BRK MAX',
    '000002204': '\x1b<3mAUTO BRK OFF',
    '000002701': '\x1b<3mIR 1 IN ATT ALIGN',
    '000002702': '\x1b<3mIR 2 IN ATT ALIGN',
    '000002703': '\x1b<3mIR 3 IN ATT ALIGN',
    '000002704': '\x1b<3mIR 1+2 IN ATT ALIGN',
    '000002705': '\x1b<3mIR 1+3 IN ATT ALIGN',
    '000002706': '\x1b<3mIR 2+3 IN ATT ALIGN',
    '000002707': '\x1b<3mIR 1+2+3 IN ATT ALIGN',
    '000003001': '\x1b<3mIR IN ALIGN > 7 MN',
    '000003002': '\x1b<4mIR IN ALIGN > 7 MN',
    '000003003': '\x1b<3mIR IN ALIGN 6 MN',
    '000003004': '\x1b<4mIR IN ALIGN 6 MN',
    '000003005': '\x1b<3mIR IN ALIGN 5 MN',
    '000003006': '\x1b<4mIR IN ALIGN 5 MN',
    '000003007': '\x1b<3mIR IN ALIGN 4 MN',
    '000003008': '\x1b<4mIR IN ALIGN 4 MN',
    '000003101': '\x1b<3mIR IN ALIGN 3 MN',
    '000003102': '\x1b<4mIR IN ALIGN 3 MN',
    '000003103': '\x1b<3mIR IN ALIGN 2 MN',
    '000003104': '\x1b<4mIR IN ALIGN 2 MN',
    '000003105': '\x1b<3mIR IN ALIGN 1 MN',
    '000003106': '\x1b<4mIR IN ALIGN 1 MN',
    '000003107': '\x1b<3mIR IN ALIGN',
    '000003108': '\x1b<4mIR IN ALIGN',
    '000003109': '\x1b<3mIR ALIGNED',
    '000004001': '\x1b<3mNW STRG DISC',
    '000004002': '\x1b<4mNW STRG DISC',
    '000005001': '\x1b<3mREFUELG',
    '000005501': '\x1b<3mGND SPLRS ARMED',
    '000056101': '\x1b<3mCOMPANY ALERT',
    '000056102': '\x1b<3m\x1b)mCOMPANY ALERT',
    '000006001': '\x1b<3mSPEED BRK',
    '000006002': '\x1b<4mSPEED BRK',
    '000007001': '\x1b<3mIGNITION',
    '000008001': '\x1b<3mSEAT BELTS',
    '000008501': '\x1b<3mNO MOBILE',
    '000009001': '\x1b<3mNO SMOKING',
    '000009501': '\x1b<3mNO PORTABLE DEVICES',
    '000010001': '\x1b<3mSTROBE LT OFF',
    '000010501': '\x1b<3mOUTR TK FUEL XFRD',
    '000011001': '\x1b<3mFOB BELOW 3 T',
    '000011002': '\x1b<3mFOB BELOW 6600 LBS',
    '000013501': '\x1b<3mACARS STBY',
    '000014001': '\x1b<6mT.O INHIBIT',
    '000015001': '\x1b<6mLDG INHIBIT',
    '000030501': '\x1b<3mGPWS FLAP MODE OFF',
    '000066001': '\x1b<3mGSM DISC < 4MN',
    '000056501': '\x1b<3mATC DATALINK STBY',
    '000016001': '\x1b<3mHYD PTU',
    '000017001': '\x1b<3mAPU AVAIL',
    '000018001': '\x1b<3mAPU BLEED',
    '000019001': '\x1b<3mLDG LT',
    '000020001': '\x1b<3mPARK BRK',
    '000021001': '\x1b<3mRAT OUT',
    '000021002': '\x1b<3mRAT OUT',
    '000022001': '\x1b<3mBRK FAN',
    '000023001': '\x1b<3mMAN LDG ELEV',
    '000025001': '\x1b<3mFUEL X FEED',
    '000025002': '\x1b<4mFUEL X FEED',
    '000026001': '\x1b<3mENG A. ICE',
    '000027001': '\x1b<3mWING A. ICE',
    '000027501': '\x1b<3mICE NOT DET',
    '000029001': '\x1b<3mSWITCHG PNL',
    '000030001': '\x1b<3mGPWS FLAP 3',
    '000032001': '\x1b<3mTCAS STBY',
    '000032501': '\x1b<4mTCAS STBY',
    '000035001': '\x1b<2mLAND ASAP',
    '000036001': '\x1b<4mLAND ASAP',
    '000054001': '\x1b<3mPRED W/S OFF',
    '000054002': '\x1b<4mPRED W/S OFF',
    '000054501': '\x1b<3mTERR OFF',
    '000054502': '\x1b<4mTERR OFF',
    '000055201': '\x1b<3mCOMPANY MSG',
    '000056001': '\x1b<3mHI ALT SET',
    '000068001': '\x1b<3mADIRS SWTG',
    '000056701': '\x1b<3mVHF3 VOICE',
    '213122101': '\x1b<2m\x1b4mCAB PR\x1bm EXCESS CAB ALT',
    '213122102': '\x1b<5m -CREW OXY MASKS.....USE',
    '213122103': '\x1b<5m -SIGNS...............ON',
    '213122104': '\x1b<7m     .\x1b4mEMER DESCENT\x1bm:',
    '213122105': '\x1b<5m -DESCENT.......INITIATE',
    '213122106': '\x1b<5m -THR LEVERS........IDLE',
    '213122107': '\x1b<5m -SPD BRK...........FULL',
    '213122108': '\x1b<5m SPD.....MAX/APPROPRIATE',
    '213122109': '\x1b<5m -ENG MODE SEL.......IGN',
    '213122110': '\x1b<5m -ATC.............NOTIFY',
    '213122111': '\x1b<5m -CABIN CREW......ADVISE',
    '213122112': '\x1b<5m -EMER DES (PA).ANNOUNCE',
    '213122113': '\x1b<5m -XPDR 7700.....CONSIDER',
    '213122114': '\x1b<5m MAX FL.....100/MEA-MORA',
    '213122115': '\x1b<7m  .IF CAB ALT>14000FT:',
    '213122116': '\x1b<5m -PAX OXY MASKS...MAN ON',
    '216120601': '\x1b<4m\x1b4mAIR\x1bm PACK 1+2 FAULT',
    '216120602': '\x1b<5m -PACK 1.............OFF',
    '216120603': '\x1b<5m -PACK 2.............OFF',
    '216120604': '\x1b<5m -DES TO FL 100/MEA-MORA',
    '216120605': '\x1b<7m  .WHEN DIFF PR <1 PSI',
    '216120606': '\x1b<7m   AND FL BELOW 100:',
    '216120607': '\x1b<5m -RAM AIR.............ON',
    '216120608': '\x1b<5m MAX FL.....100/MEA-MORA',
    '216120201': '\x1b<4m\x1b4mAIR\x1bm PACK 1 FAULT',
    '216120202': '\x1b<5m -PACK 1.............OFF',
    '216120301': '\x1b<4m\x1b4mAIR\x1bm PACK 2 FAULT',
    '216120302': '\x1b<5m -PACK 2.............OFF',
    '216120701': '\x1b<4m\x1b4mAIR\x1bm PACK 1 OFF',
    '216120801': '\x1b<4m\x1b4mAIR\x1bm PACK 2 OFF',
    '216129101': '\x1b<4m\x1b4mAIR\x1bm COND CTL 1-A FAULT',
    '216129401': '\x1b<4m\x1b4mAIR\x1bm COND CTL 2-A FAULT',
    '216129701': '\x1b<4m\x1b4mAIR\x1bm COND CTL 1-B FAULT',
    '216129801': '\x1b<4m\x1b4mAIR\x1bm COND CTL 2-B FAULT',
    '216321001': '\x1b<4m\x1b4mCOND\x1bm CKPT DUCT OVHT',
    '216321002': '\x1b<7m  .WHEN DUCT TEMP<70 DEG C:',
    '216321003': '\x1b<7m  .WHEN DUCT TEMP<158 DEG F:',
    '216321004': '\x1b<5m -HOT AIR....OFF THEN ON',
    '216321101': '\x1b<4m\x1b4mCOND\x1bm FWD CAB DUCT OVHT',
    '216321102': '\x1b<7m  .WHEN DUCT TEMP<70 DEG C:',
    '216321103': '\x1b<7m  .WHEN DUCT TEMP<158 DEG F:',
    '216321104': '\x1b<5m -HOT AIR....OFF THEN ON',
    '216321201': '\x1b<4m\x1b4mCOND\x1bm AFT CAB DUCT OVHT',
    '216321202': '\x1b<7m  .WHEN DUCT TEMP<70 DEG C:',
    '216321203': '\x1b<7m  .WHEN DUCT TEMP<158 DEG F:',
    '216321204': '\x1b<5m -HOT AIR....OFF THEN ON',
    '216321801': '\x1b<4m\x1b4mCOND\x1bm L+R CAB FAN FAULT',
    '216321802': '\x1b<5m -PACK FLOW...........HI',
    '216326001': '\x1b<4m\x1b4mCOND\x1bm LAV+GALLEY FAN FAULT',
    '216329001': '\x1b<4m\x1b4mCOND\x1bm HOT AIR FAULT',
    '216329002': '\x1b<5m -HOT AIR............OFF',
    '216329003': '\x1b<7m  .IF HOT AIR STILL OPEN:',
    '216329004': '\x1b<5m -PACK 1.............OFF',
    '216329005': '\x1b<5m -PACK 2.............OFF',
    '216330501': '\x1b<4m\x1b4mCOND\x1bm TRIM AIR SYS FAULT',
    '216330502': '\x1b<4m -CPKT TRIM VALVE',
    '216330503': '\x1b<4m -FWD CAB TRIM VALVE',
    '216330504': '\x1b<4m -AFT CAB TRIM VALVE',
    '216330505': '\x1b<4m -TRIM AIR HI PR',
    '221070001': '\x1b<4m\x1b4mT.O\x1bm SPEEDS TOO LOW',
    '221070002': '\x1b<5m -TOW AND T.O DATA.CHECK',
    '221071001': '\x1b<4m\x1b4mT.O\x1bm V1/VR/V2 DISAGREE',
    '221072001': '\x1b<4m\x1b4mT.O\x1bm SPEEDS NOT INSERTED',
    '260001001': '\x1b<2m\x1b4mENG 1 FIRE\x1bm',
    '260001002': '\x1b<5m -THR LEVER 1.......IDLE',
    '260001003': '\x1b<5m -THR LEVERS........IDLE',
    '260001004': '\x1b<7m  .WHEN A/C IS STOPPED:',
    '260001005': '\x1b<5m -PARKING BRK.........ON',
    '260001006': '\x1b<5m -ATC.............NOTIFY',
    '260001007': '\x1b<5m -CABIN CREW.......ALERT',
    '260001008': '\x1b<5m -ENG MASTER 1.......OFF',
    '260001009': '\x1b<5m -ENG 1 FIRE P/B....PUSH',
    '260001010': '\x1b<7m -AGENT1 AFTER 10S.DISCH',
    '260001011': '\x1b<5m -AGENT 1..........DISCH',
    '260001012': '\x1b<5m -AGENT 1..........DISCH',
    '260001013': '\x1b<5m -AGENT 2..........DISCH',
    '260001014': '\x1b<5m -EMER EVAC PROC...APPLY',
    '260001015': '\x1b<5m -ATC.............NOTIFY',
    '260001016': '\x1b<7m  .IF FIRE AFTER 30S:',
    '260001017': '\x1b<5m -AGENT 2..........DISCH',
    '260002001': '\x1b<2m\x1b4mENG 2 FIRE\x1bm',
    '260002002': '\x1b<5m -THR LEVER 2.......IDLE',
    '260002003': '\x1b<5m -THR LEVERS........IDLE',
    '260002004': '\x1b<7m  .WHEN A/C IS STOPPED:',
    '260002005': '\x1b<5m -PARKING BRK.........ON',
    '260002006': '\x1b<5m -ATC.............NOTIFY',
    '260002007': '\x1b<5m -CABIN CREW.......ALERT',
    '260002008': '\x1b<5m -ENG MASTER 2.......OFF',
    '260002009': '\x1b<5m -ENG 2 FIRE P/B....PUSH',
    '260002010': '\x1b<5m -AGENT1 AFTER 10S.DISCH',
    '260002011': '\x1b<5m -AGENT 1..........DISCH',
    '260002012': '\x1b<5m -AGENT 1..........DISCH',
    '260002013': '\x1b<5m -AGENT 2..........DISCH',
    '260002014': '\x1b<5m -EMER EVAC PROC...APPLY',
    '260002015': '\x1b<5m -ATC.............NOTIFY',
    '260002016': '\x1b<7m  .IF FIRE AFTER 30S:',
    '260002017': '\x1b<5m -AGENT 2..........DISCH',
    '260003001': '\x1b<2m\x1b4mAPU FIRE\x1bm',
    '260003002': '\x1b<5m -APU FIRE P/B......PUSH',
    '260003003': '\x1b<5m -AGENT AFTER 10S..DISCH',
    '260003004': '\x1b<5m -AGENT............DISCH',
    '260003005': '\x1b<5m -MASTER SW..........OFF',
    '260015001': '\x1b<2m\x1b4mSMOKE\x1bm FWD CARGO SMOKE',
    '260015002': '\x1b<5m -FWD ISOL VALVE.....OFF',
    '260015003': '\x1b<5m -CAB FANS...........OFF',
    '260015004': '\x1b<7m  .IF FWD CARG CLOSED:',
    '260015005': '\x1b<5m -AGENT............DISCH',
    '260015006': '\x1b<7m  .WHEN ON GROUND:',
    '260015007': '\x1b<7m BEFORE OPEN CRG DOORS:',
    '260015008': '\x1b<7m .BEFORE OPEN CRG DOORS:',
    '260015009': '\x1b<5m -PAX..........DISEMBARK',
    '270005201': '\x1b<2m\x1b4mF/CTL\x1bm FLAP LVR NOT ZERO',
    '270008501': '\x1b<2m\x1b4mCONFIG\x1bm',
    '270008502': '\x1b<2mSLATS NOT IN T.O CONFIG',
    '270009001': '\x1b<2m\x1b4mCONFIG\x1bm',
    '270009002': '\x1b<2mFLAPS NOT IN T.O CONFIG',
    '270011001': '\x1b<4m\x1b4mF/CTL\x1bm ELAC 1 FAULT',
    '270011002': '\x1b<5m -ELAC 1.....OFF THEN ON',
    '270011003': '\x1b<7m   .IF UNSUCCESSFUL :',
    '270011004': '\x1b<5m -ELAC 1.............OFF',
    '270011005': '\x1b<5m FUEL CONSUMPT INCRSD',
    '270011006': '\x1b<5m FMS PRED UNRELIABLE',
    '270012001': '\x1b<4m\x1b4mF/CTL\x1bm ELAC 2 FAULT',
    '270012002': '\x1b<5m -ELAC 2.....OFF THEN ON',
    '270012003': '\x1b<7m   .IF UNSUCCESSFUL :',
    '270012004': '\x1b<5m -ELAC 2.............OFF',
    '270012005': '\x1b<5m FUEL CONSUMPT INCRSD',
    '270012006': '\x1b<5m FMS PRED UNRELIABLE',
    '270021001': '\x1b<4m\x1b4mF/CTL\x1bm SEC 1 FAULT',
    '270021002': '\x1b<5m -SEC 1......OFF THEN ON',
    '270021003': '\x1b<7m   .IF UNSUCCESSFUL :',
    '270021004': '\x1b<5m -SEC 1..............OFF',
    '270021005': '\x1b<5m SPD BRK......DO NOT USE',
    '270022001': '\x1b<4m\x1b4mF/CTL\x1bm SEC 2 FAULT',
    '270022002': '\x1b<5m -SEC 2......OFF THEN ON',
    '270022003': '\x1b<7m   .IF UNSUCCESSFUL :',
    '270022004': '\x1b<5m -SEC 2..............OFF',
    '270023001': '\x1b<4m\x1b4mF/CTL\x1bm SEC 3 FAULT',
    '270023002': '\x1b<5m -SEC 3......OFF THEN ON',
    '270023003': '\x1b<7m   .IF UNSUCCESSFUL :',
    '270023004': '\x1b<5m -SEC 3..............OFF',
    '270024001': '\x1b<2m\x1b4mCONFIG\x1bm PITCH TRIM',
    '270024002': '\x1b<2m    NOT IN T.O RANGE',
    '270034001': '\x1b<2m\x1b4mCONFIG\x1bm',
    '270034002': '\x1b<2mSPD BRK NOT RETRACTED',
    '270036001': '\x1b<4m\x1b4mF/CTL\x1bm FCDC 1+2 FAULT',
    '270036002': '\x1b<5m -MONITOR F/CTL OVHD PNL',
    '270036501': '\x1b<4m\x1b4mF/CTL\x1bm DIRECT LAW',
    '270036502': '\x1b<4m      (PROT LOST)',
    '270036503': '\x1b<5m MAX SPEED.......320/.77',
    '270036504': '\x1b<5m -MAN PITCH TRIM.....USE',
    '270036505': '\x1b<5m MANEUVER WITH CARE',
    '270036506': '\x1b<5m MAX FL..............350',
    '270036507': '\x1b<5m USE SPD BRK WITH CARE',
    '270036508': '\x1b<5m SPD BRK......DO NOT USE',
    '270037301': '\x1b<2m\x1b4mCONFIG\x1bm RUD TRIM',
    '270037302': '\x1b<2m    NOT IN T.O RANGE',
    '270037501': '\x1b<4m\x1b4mF/CTL\x1bm ALTN LAW',
    '270037502': '\x1b<4m      (PROT LOST)',
    '270037503': '\x1b<5m MAX SPEED........320 KT',
    '270037504': '\x1b<5m MAX SPEED.......320/.77',
    '270037505': '\x1b<5m MANEUVER WITH CARE',
    '270037506': '\x1b<5m MAX FL..............350',
    '270037507': '\x1b<5m SPD BRK......DO NOT USE',
    '270039001': '\x1b<4m\x1b4mF/CTL\x1bm ALTN LAW',
    '270039002': '\x1b<4m      (PROT LOST)',
    '270039003': '\x1b<5m MAX SPEED........320 KT',
    '270039004': '\x1b<5m MAX SPEED.......320/.77',
    '270039005': '\x1b<5m MANEUVER WITH CARE',
    '270039006': '\x1b<5m MAX FL..............350',
    '270039007': '\x1b<5m SPD BRK......DO NOT USE',
    '270040001': '\x1b<2m\x1b4mF/CTL\x1bm L+R ELEV FAULT',
    '270040002': '\x1b<5m MAX SPEED.......320/.77',
    '270040003': '\x1b<5m -MAN PITCH TRIM.....USE',
    '270040004': '\x1b<5m MANEUVER WITH CARE',
    '270040005': '\x1b<5m MAX FL..............350',
    '270040006': '\x1b<5m SPD BRK......DO NOT USE',
    '270046001': '\x1b<4m\x1b4mF/CTL\x1bm PITCH TRIM/MCDU/CG',
    '270046002': '\x1b<4m     DISAGREE',
    '270046501': '\x1b<4m\x1b4mF/CTL\x1bm FLAP/MCDU DISAGREE',
    '270050201': '\x1b<4m\x1b4mF/CTL\x1bm SPD BRK STILL OUT',
    '270055501': '\x1b<4m\x1b4mF/CTL\x1bm FCDC 1 FAULT',
    '270055701': '\x1b<4m\x1b4mF/CTL\x1bm FCDC 2 FAULT',
    '270087001': '\x1b<4m\x1b4mF/CTL\x1bm GND SPLR NOT ARMED',
    '280013001': '\x1b<4m\x1b4mFUEL\x1bm L WING TK LO LVL',
    '280013002': '\x1b<5m -FUEL MODE SEL......MAN',
    '280013003': '\x1b<7m  .IF NO FUEL LEAK AND',
    '280013004': '\x1b<7m   FUEL IMBALANCE:',
    '280013005': '\x1b<5m -FUEL X FEED.........ON',
    '280013006': '\x1b<5m -L TK PUMP 1........OFF',
    '280013007': '\x1b<5m -L TK PUMP 2........OFF',
    '280014001': '\x1b<4m\x1b4mFUEL\x1bm R WING TK LO LVL',
    '280014002': '\x1b<5m -FUEL MODE SEL......MAN',
    '280014003': '\x1b<7m  .IF NO FUEL LEAK AND',
    '280014004': '\x1b<7m   FUEL IMBALANCE:',
    '280014005': '\x1b<5m -FUEL X FEED.........ON',
    '280014006': '\x1b<5m -R TK PUMP 1........OFF',
    '280014007': '\x1b<5m -R TK PUMP 2........OFF',
    '280014501': '\x1b<4m\x1b4mFUEL\x1bm L+R WING TK LO LVL',
    '280014502': '\x1b<5m -FUEL MODE SEL......MAN',
    '280014503': '\x1b<5m -L TK PUMP 1.........ON',
    '280014504': '\x1b<5m -L TK PUMP 2.........ON',
    '280014505': '\x1b<5m -CTR TK L XFR........ON',
    '280014506': '\x1b<5m -CTR TK PUMP 1.......ON',
    '280014507': '\x1b<5m -R TK PUMP 1.........ON',
    '280014508': '\x1b<5m -R TK PUMP 2.........ON',
    '280014509': '\x1b<5m -CTR TK R XFR........ON',
    '280014510': '\x1b<5m -CTR TK PUMP 2.......ON',
    '280014511': '\x1b<7m    .IF NO FUEL LEAK:',
    '280014512': '\x1b<5m -FUEL X FEED.........ON',
    '280014513': '\x1b<7m    .IF GRVTY FEED:',
    '280014514': '\x1b<5m -FUEL X FEED........OFF',
    '290031001': '\x1b<4m*HYD',
    '290031201': '\x1b<4m*HYD',
    '290012601': '\x1b<4m\x1b4mHYD\x1bm B RSVR OVHT',
    '290012602': '\x1b<5m -BLUE ELEC PUMP.....OFF',
    '290012701': '\x1b<4m\x1b4mHYD\x1bm Y RSVR OVHT',
    '290012702': '\x1b<5m -PTU................OFF',
    '290012703': '\x1b<5m -YELLOW ENG 2 PUMP..OFF',
    '290012704': '\x1b<5m -YELLOW ELEC PUMP...OFF',
    '290012801': '\x1b<4m\x1b4mHYD\x1bm G RSVR OVHT',
    '290012802': '\x1b<5m -PTU................OFF',
    '290012803': '\x1b<5m -GREEN ENG 1 PUMP...OFF',
    '308118601': '\x1b<4m\x1b4mSEVERE ICE\x1bm DETECTED',
    '308118602': '\x1b5m -WING ANTI ICE.......ON',
    '308118603': '\x1b5m -ENG MOD SEL........IGN',
    '308128001': '\x1b<4m\x1b4mANTI ICE\x1bm ICE DETECTED',
    '308128002': '\x1b5m -ENG 1 ANTI ICE......ON',
    '308128003': '\x1b5m -ENG 2 ANTI ICE......ON',
    '320001001': '\x1b<4m\x1b4mBRAKES\x1bm HOT',
    '320001002': '\x1b<7m   .IF PERF PERMITS :',
    '320001003': '\x1b<5m -PARK BRK:PREFER CHOCKS',
    '320001004': '\x1b<5m MAX SPEED.......250/.60',
    '320001005': '\x1b<5m -BRK FAN.............ON',
    '320001006': '\x1b<5m -DELAY T.O FOR COOL',
    '320001007': '\x1b<5m -L/G........DN FOR COOL',
    '320001008': '\x1b<7m   .FOR L/G RETRACTION:',
    '320001009': '\x1b<5m MAX SPEED.......220/.54',
    '320005001': '\x1b<2m\x1b4mCONFIG\x1bm PARK BRK ON',
    '320006001': '\x1b<4m\x1b4mBRAKES\x1bm A/SKID N/WS FAULT',
    '320006002': '\x1b<5m MAX BRK PR......1000 PSI',
    '320015001': '\x1b<2m\x1b4mL/G\x1bm GEAR NOT DOWN',
    '320015501': '\x1b<2m\x1b4mL/G\x1bm GEAR NOT DOWN',
    '320018001': '\x1b<4m\x1b4mL/G\x1bm LGCIU 1 FAULT',
    '320018002': '\x1b<5m -GPWS SYS...........OFF',
    '320019001': '\x1b<4m\x1b4mL/G\x1bm LGCIU 2 FAULT',
    '320019501': '\x1b<4m\x1b4mL/G\x1bm LGCIU 1+2 FAULT',
    '320019502': '\x1b<5m -L/G........GRVTY EXTN',
    '320019503': '\x1b<5m -GPWS SYS...........OFF',
    '340014001': '\x1b<4m\x1b4mNAV\x1bm RA 1 FAULT',
    '340015001': '\x1b<4m\x1b4mNAV\x1bm RA 2 FAULT',
    '340050001': '\x1b<4m\x1b4mNAV\x1bm TCAS FAULT',
    '340050701': '\x1b<4m\x1b4mNAV\x1bm TCAS STBY',
    '340021001': '\x1b<2m\x1b4mOVERSPEED\x1bm',
    '340021002': '\x1b<2m -VFE...............177',
    '340022001': '\x1b<2m\x1b4mOVERSPEED\x1bm',
    '340022002': '\x1b<2m -VFE...............185',
    '340023001': '\x1b<2m\x1b4mOVERSPEED\x1bm',
    '340023002': '\x1b<2m -VFE...............200',
    '340023501': '\x1b<2m\x1b4mOVERSPEED\x1bm',
    '340023502': '\x1b<2m -VFE...............215',
    '340024001': '\x1b<2m\x1b4mOVERSPEED\x1bm',
    '340024002': '\x1b<2m -VFE...............230',
    '490001001': '\x1b<4m\x1b4mAPU\x1bm AUTO SHUT DOWN',
    '490001002': '\x1b<5m -MASTER SW..........OFF',
    '770002701': '\x1b<2m\x1b4mENG\x1bm ALL ENGINES FAILURE',
    '770002702': '\x1b<5m -EMER ELEC PWR...MAN ON',
    '770002703': '\x1b<5m OPT RELIGHT SPD.280/.77',
    '770002704': '\x1b<5m OPT RELIGHT SPD.300/.77',
    '770002705': '\x1b<5m OPT RELIGHT SPD.260/.77',
    '770002706': '\x1b<5m OPT RELIGHT SPD.270/.77',
    '770002707': '\x1b<5m -APU..............START',
    '770002708': '\x1b<5m -THR LEVERS........IDLE',
    '770002709': '\x1b<5m -FAC 1......OFF THEN ON',
    '770002710': '\x1b<5m GLDG DIST: 2NM/1000FT',
    '770002711': '\x1b<5m -DIVERSION.....INITIATE',
    '770002712': '\x1b<5m-ALL ENG FAIL PROC.APPLY',
    '770064201': '\x1b<4m\x1b4mENG\x1bm THR LEVERS NOT SET',
    '770064202': '\x1b<5m -THR LEVERS.....TO/GA',
    '770064701': '\x1b<4m\x1b4mENG\x1bm \x1b<4mTHR LEVERS NOT SET',
    '770064702': '\x1b<5m -THR LEVERS.....MCT/FLX',
    '770064703': '\x1b<5m -THR LEVERS.....TO/GA',
};

export default EWDMessages;

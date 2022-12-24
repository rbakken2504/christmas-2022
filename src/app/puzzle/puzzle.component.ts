import { Component } from '@angular/core';
import * as _ from 'lodash';
import {delay, delayWhen, filter, Subject} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.scss']
})
export class PuzzleComponent {
  private LOWER_OFFSET = 96;
  private UPPER_OFFSET = 38;
  private _puzzleInput: string[] = [
    'PcPlnShmrLmBnmcwBhrmcmbHNGFGpwdFFwGNjNbGqNHH',
    'tzQfRJfWZZztWzVtCTfRzFZjpFjNZjGLHbdHLDdjpb',
    'CCQTzRLzvQVVfRzJfMPsnBlglgPmBgPmvSrl',
    'RMfvbbszHTsssFPzDQPggpQJPQ',
    'NSNcqVtLVGgDlpQBClVB',
    'hmStGNNLhjNrpWLGSjWrZssbZTMMvTfMnThbRRTs',
    'fTrTPGTbfftWBBmLjrJL',
    'DqHwVMqVplDslmlZmpHVwNnShWZFdBBdjWBtWtdtWJSSLS',
    'MNslpDvVHlwsmpQRgQgCfTTcvcRQ',
    'pBBhRgDsMsswprBhvgRglZtFGFFRqZtZmRtNqtZPPN',
    'TdmmzzmdZdqdGFtF',
    'nmSccCVmSCpDCswMwl',
    'NptqDsQtDTQzCvlzCpRlRp',
    'jmZcndmjbZcjrmDvFMFFlwCvzFnF',
    'jjgLVLrGcdDBNhWQTgHg',
    'mLVhhfSMSTmMwClHGdpjDHjGdV',
    'zPrZgJCgbsnrPtZzsCsbpRDjBRHnjGDRldRHppcG',
    'JJrbsFrZqrgWbbqbrgWzJPNTwhTNCmmvfWCShhhmwwfm',
    'ftgfljvgfgBTNvtggFDDGLGRDnMDzcQzncGt',
    'VdbpbVdZwdwrsVVLRrMrDLDBGnBGcM',
    'wmpWwWsHWBCCCPPvjvmSqlfTTmSNgN',
    'jSqmzmmSSDRjLMLDwqjNcMMLTTflffWCCsRsTHnHVrfHWTsr',
    'tdbgZpgBPdgGZGGFTHVpCsCVfVsJpnWl',
    'FnPQFvbvhFFFbvBwScjhzcqSLLSzSN',
    'bWdgrWwwFWbgzFWzrmNbdPqttChMSRnmqSPSnqtMRM',
    'lcPJLDDPPfpMBCRJBtQtMh',
    'lGDGjTGLLDHPPGjlPTsswsbHNFsNrFNFsrzr',
    'VmtHfVhBLHVtlhphjZMdnQQZZqZmQDdzQQ',
    'CPFwPWrvWgrfNgFPCMqZzMDDbznFTqqzDQ',
    'NNPsfffPCsBLjpVltV',
    'ssdBBJqJhlTJLsjTJqFFmnmmnnrcmpprmmmPcRlf',
    'gqtqzSgWQWqmnRPPcNmmQM',
    'GqbSVtGzvgvgWbZjjBhTdhBsTZBJBZ',
    'jhNBsPDzLjsVhLSNzgvcvbcwbBWFcgtWCc',
    'ZQQTTHHnGpMtnpdHpQJfMgrvWWFqbcWWGgrgwCCwwF',
    'nHpmMnQQMmHpRnHRmMJnnTShPzljzjSNmSDhLsNSPtSh'
  ];
  public answer: string | undefined;
  public answerResult$ = new Subject();
  public remainingAttempts = 10;

  constructor(private _router: Router) {}

  public async checkAnswer() {
    this.remainingAttempts--;
    const expected = this._solve();
    const actual = parseInt(this.answer as string, 10);

    if (expected === actual) {
      localStorage.setItem('SOLVED-PUZZLE', '1');
      await this._router.navigate(['congrats']);
    }

    if (this.remainingAttempts <= 0) {
      localStorage.setItem('FAILED-PUZZLE', '1');
      await this._router.navigate(['failure']);
    }

    const msg = `Incorrect! That answer is too ${actual < expected ? 'low' : 'high'}! You have ${this.remainingAttempts} attempts left`;
    this.answerResult$.next(msg);
    setTimeout(() => this.answerResult$.next(null), 5000);
  }

  private _solve(): number {
    return this._puzzleInput.reduce((acc, cur) => {
      const mid = cur.length / 2;
      const compartment1 = cur.substring(0, mid).split('');
      const compartment2 = cur.substring(mid).split('');
      const intersection = _.intersection(compartment1, compartment2);
      const total = intersection.reduce((total, char) => char == char.toUpperCase()
        ? total + char.charCodeAt(0) - this.UPPER_OFFSET
        : total + char.charCodeAt(0) - this.LOWER_OFFSET, 0);
      return acc + total;
    }, 0);
  }
}

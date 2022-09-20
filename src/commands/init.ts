import {Command, Flags} from '@oclif/core'
import {exec} from 'node:child_process'
export default class Init extends Command {
  static description = 'get all the required package installed using this command'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  public async run(): Promise<void> {
    exec('npm i mobx mobx-react',
      function (error, stdout, stderr) {
        console.log('stdout: ' + stdout)
        console.log('stderr: ' + stderr)
        if (error !== null) {
          console.log('exec error: ' + error)
        }
      })

    this.log('packages successfully installed')
  }
}

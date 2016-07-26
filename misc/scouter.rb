require 'bundler'
require 'json'

Bundler.require

USERS = %w(ohtake yoshimov m-ueno nhayato)

def fetch_user(name)
  warn sc = GithubScouter::Scouter.new(name)
  GithubScouter::Printer.new(sc).put

  {
    name: name,
    repos_rank: GithubScouter::Scouter.language_rank(sc.repos),
    starred_rank: GithubScouter::Scouter.language_rank(sc.starred),

    sum: sc.atk + sc.int + sc.agi,
    atk: sc.atk,
    int: sc.int,
    agi: sc.agi,
  }
end

def fetch
  data = USERS.map do |u|
    d = fetch_user(u)
    warn d.inspect
    d
  end

  warn data.inspect
  data
end

def main
  data = fetch
  puts data.to_json
  open('scouterData.json', 'w') {|f| f.puts data.to_json}
end

main
